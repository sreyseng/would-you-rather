import { combineReducers } from 'redux';
import users from './reducer_user';
import authentication from './reducer_authentication';
import { recieveQuestionsReducer, recieveQuestionsStateReducer } from './reducer_questions';

const rootReducer = combineReducers({
  users,
  authentication,
  questions: recieveQuestionsReducer,
  questionsState: recieveQuestionsStateReducer
});

export default rootReducer;
