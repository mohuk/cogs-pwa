import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as loginReducer } from './login';

export default combineReducers({
  routing: routerReducer,
  login: loginReducer
});
