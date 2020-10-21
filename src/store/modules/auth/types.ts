import { MutationTypes } from '@/store/mutation-types'
import { ActionTypes } from '@/store/action-types'

interface State {
  token: string | null
}

interface Getters {
  token(state: State): string | null
  bearerToken(state: State): string | null
  isSigned(state: State): boolean
}

interface Mutations<S = State> {
  [MutationTypes.SET_TOKEN](state: S, token: string): void
  [MutationTypes.REMOVE_TOKEN](state: S): void
}

interface Actions {
  [ActionTypes.LOGIN]({ commit }: AugmentedActionContext, credentials: Credential): Promise<boolean>
  [ActionTypes.LOGOUT]({ commit }: AugmentedActionContext): Promise<boolean>
}

interface Credential {
  username: string
  password: string
}

interface AugmentedActionContext {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
}

export { State, Getters, Mutations, Actions, Credential }
