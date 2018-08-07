import { RECIEVE_QUESTIONS, RECIEVE_QUESTIONS_STATE } from '../actions/index';

export function recieveQuestionsReducer(state = {}, action) {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      console.log('RECIEVE_QUESTIONS :', action.payload);
      return { ...state, ...action.payload.questions };
    default:
      return state;
  }
}

export function recieveQuestionsStateReducer(state = {}, action) {
  switch (action.type) {
    case RECIEVE_QUESTIONS_STATE:
      console.log('RECIEVE_QUESTIONS_STATE :', action.payload);
      return { ...state, ...action.payload.questionsState };
    default:
      return state;
  }
}
