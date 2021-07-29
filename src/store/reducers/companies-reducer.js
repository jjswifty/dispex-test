const SET_COMPANIES = 'GET_COMPANIES'

let initialState = {
    companies: []
}

const companiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPANIES:
            return {...state, companies: action.companies}
    
        default:
            return state
    }
}


export const setCompanies = companies => ({type: SET_COMPANIES, companies})

export default companiesReducer