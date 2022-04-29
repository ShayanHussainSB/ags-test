import { combineReducers } from 'redux'

// IMPORTING REDUCERS
import walletReducer from './wallet'
import accountReducer from './account'


const rootReducers = combineReducers({
  walletReducer,
  accountReducer,
})

export default rootReducers
