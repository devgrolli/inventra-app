import { combineReducers } from 'redux';
import homeReducer from '../home/homeReducer';
import loginReducer from '../login/loginReducer';
import passwordReducer from 'redux/password/passwordReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  password: passwordReducer,
  home: homeReducer
});

export default rootReducer;