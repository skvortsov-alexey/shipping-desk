import rootReducer from './reducer'

export type RootState = ReturnType<typeof rootReducer>

export class Failure {
	public message: string
  public code: string
  
  constructor(message: string, code: string) {
    this.message = message
    this.code = code
  }
}