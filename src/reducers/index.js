import { combineReducers } from 'redux';
import loadingReducer from './reducer_loading';
import users from './reducer_user';
import authentication from './reducer_authentication';
import { recieveQuestionsReducer, recieveQuestionsStateReducer } from './reducer_questions';

const rootReducer = combineReducers({
  users,
  authentication,
  questions: recieveQuestionsReducer,
  questionsState: recieveQuestionsStateReducer,
  loading: loadingReducer
});

export default rootReducer;
