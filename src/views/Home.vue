<template>
  <q-page>
    <h1>Home</h1>
  </q-page>
</template>

<script lang="ts">
// import { WebSocketConnection } from '@/utils/websocket'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  created() {
    // WebSocketConnection.getInstance()
    //   .private('orders')
    //   .listen('.created.order', e => {
    //     console.log('created', e)
    //   })
    //   .listen('.closed.order', e => {
    //     console.log('closed', e)
    //   })
    //   .listen('.new.order.dish', e => {
    //     console.log('new.order.dish', e)
    //   })
  }
}
</script>

<style></style>
