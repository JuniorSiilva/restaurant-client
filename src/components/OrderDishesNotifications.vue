<template>
  <div>
    <q-item v-for="(request, key) in dishes" :key="key" v-ripple clickable>
      <q-item-section>
        <q-item-label>{{ request.dish.name }}</q-item-label>
        <q-item-label caption lines="1">{{ request.description }}</q-item-label>
      </q-item-section>

      <q-item-section side>
        {{ request.created_at }}
      </q-item-section>
    </q-item>
  </div>
</template>

<script lang="ts">
import { WebSocketConnection } from '../utils/websocket'
import { EventOrderDishCreated } from '../types/websocket'
import { OrderDish } from '../models/order'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class OrderDishesNotifications extends Vue {
  dishes: Array<OrderDish> = []

  created() {
    WebSocketConnection.getInstance()
      .private('orders')
      .listen('.new.order.dish', (e: EventOrderDishCreated) => {
        this.dishes.push(e.orderDish)
      })
  }
}
</script>

<style></style>
