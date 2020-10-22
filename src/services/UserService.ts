import { AxiosResponse } from 'axios'
import { rootInstance } from '../libs/axios'
import { BaseService } from './Service'

interface Service {
  getUserTenanties(email: string): Promise<AxiosResponse<UserTenantiesResponse>>
}

interface UserTenantiesResponse {
  id: string
  email: string
  tenanties: Array<Tenanties>
  created_at: string
  updated_at: string
}

interface Tenanties {
  id: number
  company: string
  slug_company: string
  domain: string
}

const service: Service & BaseService = {
  basePath: 'users/',

  async getUserTenanties(email: string) {
    return rootInstance.get(this.basePath + email + '/tenanties')
  },
}

export { service as UserService, Service as UserServiceContract, Tenanties }
