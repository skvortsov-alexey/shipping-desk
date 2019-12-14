import { combineReducers } from 'redux'

import entities from './entities/reducer'
import system from './system/reducer'

const rootReducer = combineReducers({
  entities,
  system
})

export default rootReducer