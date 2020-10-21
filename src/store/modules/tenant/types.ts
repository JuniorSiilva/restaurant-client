import { MutationTypes } from '@/store/mutation-types'

interface State {
  customer: string | null
}

interface Getters {
  customer(state: State): string | null
  customerUrl(state: State): string
}

interface Mutations<S = State> {
  [MutationTypes.SET_CUSTOMER](state: S, customer: string): void
  [MutationTypes.REMOVE_CUSTOMER](state: S): void
}

export { State, Getters, Mutations }
