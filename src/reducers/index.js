import { combineReducers } from 'redux';
import authedUser from './reducer_user';

const rootReducer = combineReducers({
  authedUser
});

export default rootReducer;
