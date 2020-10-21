import { State } from './types'

const state: State = {
  customer: localStorage.getItem('customer'),
}

export { state }
