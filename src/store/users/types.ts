export interface UsersState {
	[id: string]: User
}

export interface User {
	id: string
	fullName: string
	email: string
	phone: string	
	company: string 
	department: string
	isBlocked: boolean
	roles: string[]
}

export interface Role {
	id: string
	name: string
}

export const REGISTER_USER = 'REGISTER_USER'
export const BLOCK_USER = 'BLOCK_USER'

interface RegisterUserAction {
	type: typeof REGISTER_USER
	payload: User
}

interface BlockUserAction {
	type: typeof BLOCK_USER
	payload: string
}

export type UserActionTypes = RegisterUserAction | BlockUserAction