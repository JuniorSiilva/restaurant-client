import { Attachment } from './attachment'
import { Category } from './category'

interface Dish {
  id: number

  description: string

  name: string

  price: number

  categories?: Array<Category>

  attachments?: Array<Attachment>

  optionals?: Array<Optional>

  created_at: string

  updated_at: string
}

interface Optional {
  id: number

  name: string

  description: string

  price: number

  created_at: string

  updated_at: string
}

export { Dish, Optional }
