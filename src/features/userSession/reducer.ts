import { createSlice } from '@reduxjs/toolkit'

import { UserSession } from './types'

const initialUserSessionState: UserSession = {
	isLoggedIn: false,
	signInErrorCode: null,
	signOutErrorCode: null,
	signUpErrorCode: null
}

const userSessionSlice = createSlice({
	name: 'userSession',
	initialState: initialUserSessionState,
	reducers: {
		signIn: {
			reducer: (state) => {
				state.signInErrorCode = null 
			},
			prepare: (login: string, password: string) => ({ payload: { login, password } })
		},
		signInSuccess: (state) => {
			state.isLoggedIn = true
		},
		signInFailure: {
			reducer: (state, action) => {
				state.signInErrorCode = action.payload.code 
			},
			prepare: (message: string, code: string) => ({ payload: { message, code } })
		},

		signOut: () => {},
		signOutSuccess: (state) => { state.isLoggedIn = false },
		signOutFailure: () => {},


		sighUp: {
			reducer: (state) => {
				state.signUpErrorCode = null 
			},
			prepare: (emaul: string, password: string) => ({ payload: { emaul, password } })
		},
		sighUpSuccess: (state) => {},
		sighUpFailure: {
			reducer: (state, action) => {
				state.signUpErrorCode = action.payload.code 
			},
			prepare: (message: string, code: string) => ({ payload: { message, code } })
		},
	}
})

export const { actions } = userSessionSlice

export default userSessionSlice.reducer