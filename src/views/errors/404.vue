<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page>
        <h1>Error 404</h1>

        <button @click.prevent="$router.go(-1)">Voltar</button>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Error404 extends Vue {}
</script>

<style></style>
