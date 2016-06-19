import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import auth from 'redux/modules/auth'
import loginModal from 'redux/modules/login'
import { reducer as formReducer } from 'redux-form'
import play from 'redux/modules/play'
export default combineReducers({
  counter,
  auth,
  loginModal,
  form: formReducer,
  router,
  play

})
