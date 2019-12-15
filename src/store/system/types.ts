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

export const SIGN_IN = 'SIGN_IN'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'

export const AUTHENTICATE = 'AUTHENTICATE'
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS'
export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE'

export const AUTHORIZE = 'AUTHORIZE'
export const AUTHORIZE_SUCCESS = 'AUTHORIZE_SUCCESS'
export const AUTHORIZE_FAILURE = 'AUTHORIZE_FAILURE'

interface SignInAction {
	type: typeof SIGN_IN
	payload: Credentials
}

interface SignInSuccessAction {
	type: typeof SIGN_IN_SUCCESS
}

interface SignInFailureAction {
	type: typeof SIGN_IN_FAILURE
	payload: string
}

export type UserActionTypes = SignInAction | SignInSuccessAction | SignInFailureAction