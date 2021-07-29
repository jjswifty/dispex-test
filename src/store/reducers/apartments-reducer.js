import { managementCompanyService, apartmentsService } from "../../services"

const SET_STREETS = 'GET_COMPANIES'
const SET_HOUSES = 'SET_HOUSES'
const SET_APARTMENTS = 'SET_APARTMENTS'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

let initialState = {
    streets: [],
    isFetching: false,
    apartments: []
}
/*
    Пользователь должен выбрать из списка Компанию(Управляющую компанию)
    и получить список квартир для выбранной Управляющей компании
    Список квартир должен быть в виде "дерева"
    с возможностью открыть/закрыть "ветвь"

        Улица 1
        ---- Дом 1
        --------- квартира 1
        --------- квартира 2
        --------- квартира 3
        --------- квартира 4
        ---- Дом 2
        --------- квартира 1

    У пользователя должна быть возможность выбрать квартиру,
    и получить список жильцов в выбранной квартире,
    а так-же добавить/удалить жильца в выбранной квартире

    Список жильцов должен быть в виде карточек одинакового размера, расположенных справа-налево, сверху-вниз

*/
const apartmentsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_STREETS:
            return {
                ...state,
                streets: action.streets
            }

        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            }

        case SET_HOUSES:
            return {
                ...state,
                houses: action.houses
            }

        case SET_APARTMENTS: 
            return {
                ...state,
                apartments: action.apartments
            }

        default:
            return state
    } 
}
const toggleFetching = () => ({type: TOGGLE_FETCHING})
export const setStreets = streets => ({type: SET_STREETS, streets})
export const setApartments = apartments => ({type: SET_APARTMENTS, apartments})

export const setListOfStreets = () => async dispatch => {
    dispatch(toggleFetching())
    try {
        const streets = await managementCompanyService.getStreets()
        
        dispatch(setStreets(streets))
    } catch (error) {
        throw new Error(error)
    } finally {
        dispatch(toggleFetching())        
    }
}

export const setListOfApartments = companyId => async dispatch => {
    dispatch(toggleFetching())
    try {
        const apartments = await apartmentsService.getApartments({
            companyId,
        })
        
        dispatch(setApartments(apartments))
    } catch (error) {
        throw new Error(error)
    } finally {
        dispatch(toggleFetching())        
    }
}

export default apartmentsReducer