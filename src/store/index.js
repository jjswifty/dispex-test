import { createStore, combineReducers, applyMiddleware } from "redux"
import ReduxThunk from 'redux-thunk'

const reducers = combineReducers({
    
})

const store = createStore(reducers, applyMiddleware(ReduxThunk))
window.store = store

export {
    store
}