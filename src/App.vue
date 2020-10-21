<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated class="glossy">
      <q-toolbar>
        <q-avatar>
          <img src="./assets/logo.png" />
        </q-avatar>

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {}
</script>

<style></style>
