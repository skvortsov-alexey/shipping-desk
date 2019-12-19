import { combineReducers } from 'redux'

import entities from 'features/entities/reducer'
import userSession from 'features/userSession/slice'

const rootReducer = combineReducers({
  entities,
  userSession
})

export default rootReducer