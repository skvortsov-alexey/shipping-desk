export interface SystemState {
	isAuthenticated: boolean
}

export interface SignInPayload {
	login: string
	password: string
}

export interface SignInSuccessPayload {}

export interface SignInFailurePayload {
	payload: string
}