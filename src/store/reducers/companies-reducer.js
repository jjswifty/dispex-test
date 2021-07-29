const SET_COMPANIES = 'GET_COMPANIES'
const SET_SELECTED_COMPANY = 'SET_SELECTED_COMPANY'
const SET_IS_COMPANY_SELECTED = 'SET_IS_COMPANY_SELECTED'

let initialState = {
    companies: [],
    selectedCompany: '',
    isCompanySelected: false
}

const companiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPANIES:
            return {
                ...state,
                companies: action.companies
            }

        case SET_SELECTED_COMPANY:
            return {
                ...state,
                selectedCompany: action.selectedCompany
            }

        case SET_IS_COMPANY_SELECTED:
            return {
                ...state,
                isCompanySelected: action.isCompanySelected
            }

        default:
            return state
    }
}

export const setCompanies = companies => ({type: SET_COMPANIES, companies})

export default companiesReducer