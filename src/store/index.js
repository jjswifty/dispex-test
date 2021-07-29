import { createStore, combineReducers, applyMiddleware } from "redux"
import ReduxThunk from 'redux-thunk'
import { apartmentsReducer, companiesReducer } from "./reducers"

const reducers = combineReducers({
    apartmentsReducer,
    companiesReducer
})

const store = createStore(reducers, applyMiddleware(ReduxThunk))
window.store = store

export default store