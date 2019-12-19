import { createSlice } from '@reduxjs/toolkit'

import { SystemState } from './types'

const initialSystemState: SystemState = {
	isAuthenticated: false,
}

const systemSlice = createSlice({
	name: 'system',
	initialState: initialSystemState,
	reducers: {
		sighUp: () => {},
		sighUpSuccess: () => {},
		sighUpFailure: () => {},

		signIn: {
			reducer: () => {},
			prepare: (login: string, password: string) => ({ payload: { login, password } })
		},
		signInSuccess: (state) => {	state.isAuthenticated = true },
		signInFailure: {
			reducer: () => {},
			prepare: (message: string, code: string) => ({ payload: { message, code } })
		},

		signOut: () => {},
		signOutSuccess: (state) => { state.isAuthenticated = false },
		signOutFailure: () => {}
	}
})

export const { actions } = systemSlice

export default systemSlice.reducer