import { combineReducers } from 'redux'
import { reducer as user } from './User'

const reducers = {
    user: user,
}

const rootReducer = combineReducers(
    reducers
)

export default rootReducer
