import { combineReducers } from 'redux';
import loginReducer from '../login/loginReducer';
import passwordReducer from 'redux/password/passwordReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  password: passwordReducer
});

export default rootReducer;