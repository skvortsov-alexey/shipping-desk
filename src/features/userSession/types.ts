export interface UserSession {
	isLoggedIn: boolean
	signInErrorCode: string | null
	signOutErrorCode: string | null
	signUpErrorCode: string | null
}

export interface SignInPayload {
	login: string
	password: string
}

export interface SignInSuccessPayload {}

export interface SignInFailurePayload {
	payload: string
}