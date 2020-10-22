<template>
  <q-page class="bg-light-green window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Restaurantes</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <ValidationObserver v-slot="{ passes }" ref="form" slim>
            <q-form @submit.prevent="passes(handle)">
              <q-card-section>
                <div class="q-gutter-md">
                  <ValidationProvider
                    v-if="tenanties.length > 0"
                    ref="customer"
                    v-slot="{ errors }"
                    name="customer"
                    rules="required"
                  >
                    <q-select
                      v-model="tenancy"
                      square
                      filled
                      :options="tenanties"
                      label="Restaurante"
                      option-value="slug_company"
                      option-label="company"
                      emit-value
                      map-options
                      :disable="tenanties.length == 1"
                      :error-message="errors[0]"
                      :error="!!errors[0]"
                    />
                  </ValidationProvider>

                  <ValidationProvider ref="username" v-slot="{ errors }" name="username" rules="required|email">
                    <q-input
                      v-model="credentials.username"
                      :readonly="!!tenancy || tenanties.length > 0"
                      square
                      filled
                      clearable
                      type="email"
                      label="E-mail"
                      :error-message="errors[0]"
                      :error="!!errors[0]"
                    >
                      <template v-if="!!tenancy || tenanties.length > 0" v-slot:append>
                        <q-icon name="edit" class="cursor-pointer" @click="updateEmail" />
                      </template>
                    </q-input>
                  </ValidationProvider>

                  <ValidationProvider v-if="!!tenancy" ref="password" v-slot="{ errors }" name="password" rules="required">
                    <Password v-model="credentials.password" :errors="errors"></Password>
                  </ValidationProvider>
                </div>
              </q-card-section>
              <q-card-actions class="q-px-md">
                <q-btn
                  unelevated
                  color="light-green-7"
                  size="lg"
                  class="full-width"
                  :label="btnLabel"
                  :loading="isLoading"
                  type="submit"
                />
              </q-card-actions>
            </q-form>
          </ValidationObserver>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { ActionTypes } from '@/store/action-types'
import { Credential } from '@/store/modules/auth/types'
import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { Notify } from 'quasar'
import { UnauthenticatedException } from '@/libs/axios/handlers/exceptions/UnauthenticatedException'
import { AppException } from '@/libs/axios/handlers/exceptions/AppException'
import Password from '../components/inputs/Password.vue'
import { Tenanties, UserService } from '@/services/UserService'
import { MutationTypes } from '@/store/mutation-types'

@Component({
  components: {
    Password,
  },
  methods: {
    ...mapActions('auth', { vActionLogin: ActionTypes.LOGIN }),
    ...mapMutations('tenant', { vSetCustomer: MutationTypes.SET_CUSTOMER, vRemoveCustomer: MutationTypes.REMOVE_CUSTOMER }),
  },
  computed: {
    ...mapGetters('tenant', { vCustomer: 'customer' }),
  },
})
export default class SignIn extends Vue {
  credentials: Credential = {
    username: '',
    password: '',
  }

  vCustomer!: string

  tenanties: Tenanties[] = []

  isLoading = false

  get btnLabel() {
    return this.tenancy ? 'Entrar' : 'Continuar'
  }

  get tenancy() {
    return this.vCustomer
  }

  set tenancy(val) {
    this.vSetCustomer(val)
  }

  created() {
    this.vRemoveCustomer()
  }

  vActionLogin!: (credentials: Credential) => Promise<boolean>

  vSetCustomer!: (customer: string) => void

  vRemoveCustomer!: () => void

  updateEmail() {
    this.vRemoveCustomer()

    this.tenanties = []
  }

  handle() {
    if (this.tenancy) return this.signIn()

    return this.checkUserTenanties()
  }

  async checkUserTenanties() {
    this.isLoading = true

    UserService.getUserTenanties(this.credentials.username)
      .then(response => {
        if (response.status === 200) {
          const tenanties = response.data.tenanties

          this.tenanties = tenanties

          if (tenanties.length == 1) {
            this.tenancy = tenanties[0].slug_company
          }
        } else {
          Notify.create({ type: 'negative', message: 'Usuário não identificado' })
        }
      })
      .catch((e: AppException) => {
        Notify.create({ type: 'negative', message: e.getMessage() })
      })
      .then(() => {
        this.isLoading = false
      })
  }

  async signIn() {
    this.isLoading = true

    this.vActionLogin(this.credentials)
      .then(() => {
        this.$router.replace({ name: 'home' })
      })
      .catch((e: AppException) => {
        Notify.create({ type: 'negative', message: e.getMessage() })

        if (e instanceof UnauthenticatedException) {
          this.credentials.password = ''
        }

        this.isLoading = false
      })
  }
}
</script>

<style scoped>
.q-card {
  width: 360px;
}
</style>
