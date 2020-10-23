<template>
  <div>
    <q-item v-for="(request, key) in orders" :key="key" v-ripple clickable>
      <q-item-section>
        <q-item-label>{{ request.cpf }}</q-item-label>
        <q-item-label caption lines="1">{{ request.status }}</q-item-label>
      </q-item-section>

      <q-item-section side>
        {{ request.created_at }}
      </q-item-section>
    </q-item>
  </div>
</template>

<script lang="ts">
import { WebSocketConnection } from '../utils/websocket'
import { EventOrderClosed, EventOrderCreated } from '../types/websocket'
import { Order } from '../models/order'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TableNotifications extends Vue {
  orders: Array<Order> = []

  created() {
    WebSocketConnection.getInstance()
      .private('orders')
      .listen('.created.order', (e: EventOrderCreated) => {
        this.orders.push(e.order)
      })
      .listen('.closed.order', (e: EventOrderClosed) => {
        this.orders.push(e.order)
      })
  }
}
</script>

<style></style>
