import { AxiosError } from 'axios'
import { HandlerContract } from './contracts/HandlerContract'
import { AppException } from './exceptions/AppException'

class DefaultHandler implements HandlerContract {
  protected error: AxiosError

  constructor(error: AxiosError) {
    this.error = error
  }

  handler(): never {
    throw new AppException(this.error.response?.data)
  }
}

export { DefaultHandler }
