<template>
  <q-page class="bg-light-green window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Restaurantes</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input v-model="credentials.username" square filled clearable type="email" label="E-mail" />
              <q-input v-model="credentials.password" square filled clearable type="password" label="Senha" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              color="light-green-7"
              size="lg"
              class="full-width"
              label="Entrar"
              :loading="isLoading"
              @click.prevent="signIn"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { ActionTypes } from '@/store/action-types'
import { Credential } from '@/store/modules/auth/types'
import { Component, Vue } from 'vue-property-decorator'
import { mapActions } from 'vuex'
import { Notify } from 'quasar'
import { UnauthenticatedException } from '@/libs/axios/handlers/exceptions/UnauthenticatedException'
import { AppException } from '@/libs/axios/handlers/exceptions/AppException'

@Component({
  methods: {
    ...mapActions('auth', { vActionLogin: ActionTypes.LOGIN }),
  },
})
export default class SignIn extends Vue {
  credentials: Credential = {
    username: '',
    password: '',
  }

  isLoading = false

  vActionLogin!: (credentials: Credential) => Promise<void>

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
