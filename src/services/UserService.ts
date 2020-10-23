import { Customer } from '../models/customer'
import { AxiosResponse } from 'axios'
import { rootInstance } from '../libs/axios'
import { BaseService } from './Service'

interface Service {
  getUserTenanties(email: string): Promise<AxiosResponse<UserCustomerResponse>>
}

interface UserCustomerResponse {
  id: string

  email: string

  tenanties: Array<Customer>

  created_at: string

  updated_at: string
}

const service: Service & BaseService = {
  basePath: 'users/',

  async getUserTenanties(email: string) {
    return rootInstance.get(this.basePath + email + '/tenanties')
  },
}

export { service as UserService, Service as UserServiceContract }
