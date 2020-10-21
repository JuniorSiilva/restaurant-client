interface AppExceptionType {
  message: string

  status_code: number

  getMessage(): string

  getStatusCode(): number
}

class Exception {
  private message: string

  private statusCode: number

  public getMessage() {
    return this.message
  }

  public getStatusCode() {
    return this.statusCode
  }

  constructor(error: AppExceptionType) {
    this.message = error.message || 'A solicitação nao pôde ser concluida.'

    this.statusCode = error.status_code || 500
  }
}

export { Exception as AppException, AppExceptionType }
