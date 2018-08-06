import { combineReducers } from 'redux';
import users from './reducer_user';
import authentication from './reducer_authentication';

const rootReducer = combineReducers({
  users,
  authentication
});

export default rootReducer;
