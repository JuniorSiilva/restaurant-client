import { Dish } from '../models/dish'
import { Paginable } from '../types/paginate'
import { AxiosResponse } from 'axios'
import { rootInstance } from '../libs/axios'
import { BaseService } from './Service'

interface Service {
  get(): Promise<AxiosResponse<Paginable<Dish>>>
}

const service: Service & BaseService = {
  basePath: 'dishes/',

  async get() {
    return rootInstance.get(this.basePath)
  },
}

export { service as DishService, Service as DishServiceContract }
