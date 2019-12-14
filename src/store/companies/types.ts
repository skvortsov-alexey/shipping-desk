export interface CompaniesState {
	[id: string]: Company
}

export interface Company {
	id: string
	name: string
	website: string
	address: string
}