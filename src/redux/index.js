import {combineReducers} from 'redux'
import allReducers from './rootReducers/usersReducer'
import activeUserReducer from './rootReducers/activeUserReducer'
 
 const reducers = combineReducers({
     users: allReducers,
     activeUser: activeUserReducer
 })

export default reducers