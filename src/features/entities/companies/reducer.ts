import { INVALIDATE_ENTITIES } from 'features/entities/types'
import { CompaniesState } from './types'

const initialCompaniesState = {}

const companiesReducer = (state: CompaniesState = initialCompaniesState, action: any): CompaniesState => {
	switch (action.type) {
		case INVALIDATE_ENTITIES:
			return initialCompaniesState
		default:
			return state
	}
}

export default companiesReducer