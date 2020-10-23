<template>
  <q-layout view="hhr Lpr ffr">
    <q-header reveal elevated class="bg-light-green-8 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />

        <q-toolbar-title>
          {{ vCustomerName || 'Carregando...' }}
        </q-toolbar-title>

        <q-space />

        <q-btn round flat>
          <q-avatar size="26px">
            <img src="../../assets/avatar.jpg" />
          </q-avatar>

          <q-menu auto-close :offset="[150, 0]">
            <q-list dense style="min-width: 200px">
              <q-item class="GL__menu-link-signed-in">
                <q-item-section>
                  <div>Bem vindo, <strong>Fulano!</strong></div>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable class="GL__menu-link">
                <q-item-section>
                  Seu Perfil
                </q-item-section>
              </q-item>
              <q-item clickable class="GL__menu-link" @click.prevent="logout">
                <q-item-section>
                  Sair
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      mini-to-overlay
      :breakpoint="700"
      elevated
      content-class="bg-grey-1"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
    >
      <EssentialLink></EssentialLink>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ActionTypes } from '../../store/action-types'
import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import EssentialLink from '../EssentialLinks.vue'
import { Loading, Notify } from 'quasar'

@Component({
  components: {
    EssentialLink,
  },
  methods: {
    ...mapActions('auth', { vActionLogout: ActionTypes.LOGOUT }),
  },
  computed: {
    ...mapGetters('tenant', { vCustomerName: 'name' }),
  },
})
export default class PrivateLayout extends Vue {
  drawer = false

  miniState = true

  vCustomerName!: string

  vActionLogout!: () => Promise<void>

  async logout() {
    Loading.show()

    await this.vActionLogout()

    this.$router.push({ name: 'login' })

    Loading.hide()

    Notify.create({ type: 'info', message: 'Sua sessão foi encerrada.' })
  }
}
</script>

<style></style>
