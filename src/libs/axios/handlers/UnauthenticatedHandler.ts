import { HandlerContract } from './contracts/HandlerContract'
import { DefaultHandler } from './DefaultHandler'
import { UnauthenticatedException } from './exceptions/UnauthenticatedException'

class UnauthenticatedHandler extends DefaultHandler implements HandlerContract {
  handler(): never {
    throw new UnauthenticatedException(this.error.response?.data)
  }
}

export { UnauthenticatedHandler }
