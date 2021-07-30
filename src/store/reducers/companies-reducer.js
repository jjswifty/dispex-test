import { managementCompanyService } from './../../services'

const SET_COMPANIES = 'SET_COMPANIES'
const SET_SELECTED_COMPANY = 'SET_SELECTED_COMPANY'
const SET_SELECTED_COMPANY_NAME = 'SET_SELECTED_COMPANY_NAME'
const SET_IS_COMPANY_SELECTED = 'SET_IS_COMPANY_SELECTED'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

let initialState = {
    companies: [],
    selectedCompany: null,
    selectedCompanyName: '',
    isCompanySelected: false,
    isFetching: false,
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

        case SET_SELECTED_COMPANY_NAME:
            return {
                ...state,
                selectedCompanyName: action.selectedCompanyName
            }

        case SET_IS_COMPANY_SELECTED:
            return {
                ...state,
                isCompanySelected: action.isCompanySelected
            }

        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            }

        default:
            return state
    }
}

const toggleFetching = () => ({type: TOGGLE_FETCHING})
export const setCompanies = companies => ({type: SET_COMPANIES, companies})
export const setSelectedCompany = selectedCompany => ({type: SET_SELECTED_COMPANY, selectedCompany})
export const setCompanyName = selectedCompanyName => ({type: SET_SELECTED_COMPANY_NAME, selectedCompanyName}) 
export const setIsCompanySelected = isCompanySelected => ({type: SET_IS_COMPANY_SELECTED, isCompanySelected})

export const setCompaniesList = () => async (dispatch) => {
    dispatch(toggleFetching())
    try {
        const companies = await managementCompanyService.getManagementCompanies()
        
        dispatch(setCompanies(companies))

    } catch (error) {
        throw new Error(error)
    } finally {
        dispatch(toggleFetching())
    }
}

export const setChosenCompany = (companyId, companyName) => dispatch => {
    dispatch(setSelectedCompany(Number(companyId)))
    dispatch(setCompanyName(companyName))
    dispatch(setIsCompanySelected(true))
}

export default companiesReducer 