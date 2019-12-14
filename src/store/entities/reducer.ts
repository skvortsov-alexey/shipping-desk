import { combineReducers } from 'redux'

import users from './users/reducer'
import companies from './companies/reducer'
import companyDepartments from './companyDepartments/reducer'

const entitiesReducer = combineReducers({
  companies,
  companyDepartments,
  users
})

export default entitiesReducer