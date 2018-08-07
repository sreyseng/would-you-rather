import { combineReducers } from 'redux';
import users from './reducer_user';
import authentication from './reducer_authentication';
import questions from './reducer_questions';

const rootReducer = combineReducers({
  users,
  authentication,
  questions
});

export default rootReducer;
