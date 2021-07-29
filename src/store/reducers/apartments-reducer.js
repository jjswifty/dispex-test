const SET_STREETS = 'GET_COMPANIES'
const SET_HOUSES_ON_STREETS = 'SET_HOUSES_ON_STREETS'

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

    У пользователя должна быть возможность выбрать квартиру,
    и получить список жильцов в выбранной квартире,
    а так-же добавить/удалить жильца в выбранной квартире

    Список жильцов должен быть в виде карточек одинакового размера, расположенных справа-налево, сверху-вниз

    Подгружаем все дома управляющей компании, далее сортируем их по улицам.
*/
const apartmentsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_STREETS:
            return {
                ...state,
                streets: action.streets
            }

        case SET_HOUSES_ON_STREETS:
            return {
                ...state,

            }

        default:
            return state
    } 
}

//export const setCompanies = companies => ({type: SET_COMPANIES, companies})

export default apartmentsReducer