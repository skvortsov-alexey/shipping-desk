import { EntitiesActionTypes, INVALIDATE_ENTITIES } from 'features/entities/types'

import {
  UsersState,
  UserActionTypes,
  REGISTER_USER,
  BLOCK_USER
} from './types'

const initialUsersState = {}

const usersReducer = (state: UsersState = initialUsersState, action: UserActionTypes | EntitiesActionTypes): UsersState => {
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
		case INVALIDATE_ENTITIES:
			return initialUsersState
		default:
			return state
	}
}

export default usersReducer