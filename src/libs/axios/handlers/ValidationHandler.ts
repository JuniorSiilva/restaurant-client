import { HandlerContract } from './contracts/HandlerContract'
import { DefaultHandler } from './DefaultHandler'
import { ValidationException } from './exceptions/ValidationException'

class ValidationHandler extends DefaultHandler implements HandlerContract {
  handler(): never {
    throw new ValidationException(this.error.response?.data)
  }
}

export { ValidationHandler }
