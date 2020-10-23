import { Order, OrderDish } from '../models/order'

interface WebSocketResponse {
  socket: any
}

interface EventOrderDishCreated extends WebSocketResponse {
  orderDish: OrderDish
}

interface EventOrderCreated extends WebSocketResponse {
  order: Order
}

type EventOrderClosed = EventOrderCreated

export { EventOrderDishCreated, EventOrderCreated, EventOrderClosed }
