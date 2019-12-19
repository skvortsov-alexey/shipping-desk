export interface Credentials {
	email: string
	password: string
}

export interface Failure {
	message: string
	code: string
}

export interface UserSession {
	isLoggedIn: boolean
	signInErrorCode: string | null
	signOutErrorCode: string | null
	signUpErrorCode: string | null
}