import {
  UsersState,
  UserActionTypes,
  REGISTER_USER,
  BLOCK_USER
} from './types'

const usersReducer = (state: UsersState = {}, action: UserActionTypes): UsersState => {
	switch (action.type) {
		case REGISTER_USER:
			return {
				...state,
				[action.payload.id]: action.payload
			}
		case BLOCK_USER:
			return {
				...state,
				[action.payload]: {
					...state[action.payload],
					isBlocked: true
				}
			}
		default:
			return state
	}
}

export default usersReducer