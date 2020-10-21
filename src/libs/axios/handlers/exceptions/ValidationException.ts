import { AppException, AppExceptionType } from './AppException'

interface MetaType {
  errors: Record<string, Array<string>>
}

interface ValidationExceptionType extends AppExceptionType {
  meta: MetaType

  getErrors(): Record<string, Array<string>>
}

class ValidationException extends AppException {
  private errors!: Record<string, Array<string>>

  public getErrors() {
    return this.errors
  }

  constructor(error: ValidationExceptionType) {
    super(error)

    this.errors = error.meta.errors
  }
}

export { ValidationException }
