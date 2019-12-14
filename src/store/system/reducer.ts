import {
  SystemState,
} from './types'

const initialSystemState = {
	isAuthenticated: false,
	loggedIn: false,
	user: null
}

const systemStateReducer = (state: SystemState = initialSystemState, action: any): SystemState => {
	switch (action.type) {
		default:
			return state
	}
}

export default systemStateReducer