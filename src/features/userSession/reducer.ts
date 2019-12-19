import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Credentials, Failure, UserSession } from './types'

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
		signIn: (state, action: PayloadAction<Credentials>) => {
			state.signInErrorCode = null
		},
		signInSuccess: (state) => {
			state.isLoggedIn = true
		},
		signInFailure: (state, action: PayloadAction<Failure>) => {
			state.isLoggedIn = false
			state.signInErrorCode = action.payload.code 
		},


		signOut: (state) => {
			state.signOutErrorCode = null
		},
		signOutSuccess: (state) => {
			state.isLoggedIn = false
		},
		signOutFailure: (state, action: PayloadAction<Failure>) => {
			state.signOutErrorCode = action.payload.code 
		},


		signUp: (state, action: PayloadAction<Credentials>) => {
			state.signUpErrorCode = null 
		},
		signUpSuccess: () => {},
		signUpFailure: (state, action: PayloadAction<Failure>) => {
			state.signUpErrorCode = action.payload.code 
		},
	}
})

export const { actions } = userSessionSlice

export default userSessionSlice.reducer