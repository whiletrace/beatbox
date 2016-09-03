import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import play from 'redux/modules/play'
export default combineReducers({
  router,
  play

})
