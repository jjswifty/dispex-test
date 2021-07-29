const SET_STREETS = 'GET_COMPANIES',
    SET_APARTMENTS_ON_CHOSEN_COMPANY = 'SET_APARTMENTS_ON_CHOSEN_COMPANY';

let initialState = {
    streets: [],
    apartmentsOnChosenCompany: [],
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
*/
const apartmentsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_STREETS:
            return {
                ...state,
                streets: action.streets
            }

        case SET_APARTMENTS_ON_CHOSEN_COMPANY:
            return {
                ...state,
                apartments: action.streets
            }

        default:
            return state
    } // Пилим пагинацию.
}

//export const setCompanies = companies => ({type: SET_COMPANIES, companies})

export default apartmentsReducer