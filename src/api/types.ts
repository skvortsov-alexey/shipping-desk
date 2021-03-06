export interface Api {
  createUser (email: string, password: string): Promise<void>
  signIn(email: string, password: string): Promise<void>
  signOut(): Promise<void>
  resetPassword(email: string): Promise<void>
  updatePassword(password: string): Promise<void>
}

export class ApiError extends Error {
  protected code?: string

  constructor(message: string, code: ApiErrorType) {
    super(message)
    this.code = code
    this.name = this.constructor.name  
  }
}

export enum ApiErrorType {
  AUTH_EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use',
  AUTH_INVALID_EMAIL = 'auth/invalid-email',
  AUTH_OPERATION_NOT_ALLOWED = 'auth/operation-not-allowed',
  AUTH_USER_DISABLED = 'auth/user-disabled',
  AUTH_USER_NOT_FOUND = 'auth/user-not-found',
  AUTH_WRONG_PASSWORD = 'auth/wrong-password',
  AUTH_WEAK_PASSWORD = 'auth/weak-password',

  API_UNKNOWN_ERROR = 'api/unknown-error'
}