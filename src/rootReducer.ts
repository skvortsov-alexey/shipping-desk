import { combineReducers } from 'redux'

import entities from 'features/entities/reducer'
import system from 'features/system/reducer'

const rootReducer = combineReducers({
  entities,
  system
})

export default rootReducer