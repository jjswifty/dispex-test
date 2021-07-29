const SET_COMPANIES = 'GET_COMPANIES'
const SET_SELECTED_COMPANY = 'SET_SELECTED_COMPANY'

let initialState = {
    companies: []
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

        default:
            return state
    }
}

export const setCompanies = companies => ({type: SET_COMPANIES, companies})

export default companiesReducer