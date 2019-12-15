export interface CompanyDepartmentsState {
	[id: string]: CompanyDepartment
}

export interface CompanyDepartment {
	id: string
	name: string
	company: string
}