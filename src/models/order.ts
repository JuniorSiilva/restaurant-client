import { Table } from './table'
import { Dish, Optional } from './dish'

interface Order {
  id: string

  count_people: number

  cpf: string

  status: string

  table?: Table

  dishes?: Array<OrderDish>

  created_at: string

  updated_at: string
}

interface OrderDish {
  id: number

  dish?: Dish

  order?: Order

  optionals?: Array<Optional>

  description: string

  price: number

  status: string

  created_at: string

  updated_at: string
}

export { Order, OrderDish, Dish }
