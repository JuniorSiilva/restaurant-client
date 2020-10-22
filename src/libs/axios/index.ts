import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import store from '../../store'
import { HandlerContract } from './handlers/contracts/HandlerContract'
import { DefaultHandler } from './handlers/DefaultHandler'
import { UnauthenticatedHandler } from './handlers/UnauthenticatedHandler'
import { ValidationHandler } from './handlers/ValidationHandler'

/* 
  TODO: Analisar se o uso do vuex esta correto
*/

const baseConfig: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}
const appInstance: AxiosInstance = axios.create(baseConfig)

const rootInstance: AxiosInstance = axios.create(baseConfig)

const factoryHandler = (error: AxiosError): HandlerContract => {
  switch (error.response?.status) {
    case 401:
      return new UnauthenticatedHandler(error)
    case 422:
      return new ValidationHandler(error)
    default:
      return new DefaultHandler(error)
  }
}

const responseHandlerInterceptor = (error: AxiosError) => {
  if (error.response && error.isAxiosError) {
    return factoryHandler(error).handler()
  }
}

appInstance.interceptors.response.use((response: AxiosResponse) => response, responseHandlerInterceptor)

rootInstance.interceptors.response.use((response: AxiosResponse) => response, responseHandlerInterceptor)

rootInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  request.baseURL = store.getters['tenant/url']

  request.headers.Authorization = store.getters['auth/bearerToken']

  return request
})

export { appInstance, rootInstance }
