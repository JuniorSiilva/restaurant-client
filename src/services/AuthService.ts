import { Credential } from '@/store/modules/auth/types'
import { AxiosResponse } from 'axios'
import { rootInstance } from '../libs/axios'
import { BaseService } from './Service'

interface Service {
  login(credentials: Credential): Promise<AxiosResponse<LoginResponse>>
  logout(): Promise<AxiosResponse<void>>
}

interface LoginResponse {
  token: string
}

const service: Service & BaseService = {
  basePath: 'auth/',

  async login(credentials: Credential) {
    return rootInstance.post(this.basePath + 'login', credentials)
  },

  async logout() {
    return rootInstance.post(this.basePath + 'logout')
  },
}

export { service as AuthService, Service as AuthServiceContract }
