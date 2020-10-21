import { State } from './types'

const state: State = {
  token: localStorage.getItem('token'),
}

export { state }
