import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import bro from './modules/bro'

export default combineReducers({
  router,
  bro
})
