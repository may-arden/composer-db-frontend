import { combineReducers } from 'redux'
import { categoriesReducer } from './categoriesReducer'
import { composersReducer } from './composersReducer'

export const rootReducer = combineReducers({
    // combines reducers for my two models, into one reducer
    // creates keys in store that return value of state set by individual reducers
    categories: categoriesReducer,
    composers: composersReducer 
})