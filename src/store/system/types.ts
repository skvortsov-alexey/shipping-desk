import { User } from 'store/entities/users/types';

export interface SystemState {
	isAuthenticated: boolean
	isAuthorized: boolean
	user: string | null
}

export interface Credentials {
	login: string
	password: string
}

export const LOG_IN = 'LOG_IN'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const AUTHENTICATE = 'AUTHENTICATE'
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS'
export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE'

export const AUTHORIZE = 'AUTHORIZE'
export const AUTHORIZE_SUCCESS = 'AUTHORIZE_SUCCESS'
export const AUTHORIZE_FAILURE = 'AUTHORIZE_FAILURE'

interface LogInAction {
	type: typeof LOG_IN
	payload: Credentials
}

interface LogInSuccessAction {
	type: typeof LOG_IN_SUCCESS
}

interface LogInFailureAction {
	type: typeof LOG_IN_FAILURE
	payload: string
}

export type UserActionTypes = LogInAction | LogInSuccessAction | LogInFailureAction