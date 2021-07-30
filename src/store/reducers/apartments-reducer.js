import { managementCompanyService, apartmentsService } from "../../services"

const SET_STREETS = 'GET_COMPANIES'
const SET_APARTMENTS = 'SET_APARTMENTS'
const SET_APARTMENTS_FETCHING = 'SET_APARTMENTS_FETCHING'
const SET_STREETS_FETCHING = 'SET_STREETS_FETCHING'
const SET_IS_STREETS_FETCHED = 'SET_IS_STREETS_FETCHED'

let initialState = {
    streets: [],
    isApartmentsFetching: false,
    isStreetsFetching: false,
    apartments: [],
    isStreetsFetched: false,
}

const apartmentsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_STREETS:
            return {
                ...state,
                streets: action.streets
            }

        case SET_APARTMENTS: 
            return {
                ...state,
                apartments: action.apartments
            }

        case SET_APARTMENTS_FETCHING:
            return {
                ...state,
                isApartmentsFetching: action.boolean
            }

        case SET_STREETS_FETCHING:
            return {
                ...state,
                isStreetsFetching: action.boolean
            }

        case SET_IS_STREETS_FETCHED:
            return {
                ...state,
                isStreetsFetched: action.boolean
            }

        default:
            return state
    } 
}

const setStreetsFetching = boolean => ({type: SET_STREETS_FETCHING, boolean})
const setApartmentsFetching = boolean => ({type: SET_APARTMENTS_FETCHING, boolean})
export const setStreets = streets => ({type: SET_STREETS, streets})
export const setIsStreetsFetched = boolean => ({type: SET_IS_STREETS_FETCHED, boolean})
export const setApartments = apartments => ({type: SET_APARTMENTS, apartments})

export const setListOfStreets = () => async dispatch => {
    dispatch(setStreetsFetching(true))
    try {
        const streets = await managementCompanyService.getStreets()
        
        dispatch(setStreets(streets))
        dispatch(setIsStreetsFetched(true))
    } catch (error) {
        throw new Error(error)
    } finally {
        dispatch(setStreetsFetching(false))        
    }
}

export const setListOfApartments = companyId => async dispatch => {
    dispatch(setApartmentsFetching(true))
    try {
        const apartments = await apartmentsService.getApartments({
            companyId,
        })
        
        dispatch(setApartments(apartments))
    } catch (error) {
        throw new Error(error)
    } finally {
        dispatch(setApartmentsFetching(false))        
    }
}

export default apartmentsReducer