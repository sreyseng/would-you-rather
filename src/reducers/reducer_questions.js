import { RECIEVE_QUESTIONS, RECIEVE_QUESTIONS_STATE, ADD_QUESTION } from '../actions/index';

export function recieveQuestionsReducer(state = {}, action) {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return { ...state, ...action.payload.questions };
    case ADD_QUESTION:
      return {
        ...state,
        [action.payload.question.id]: action.payload.question
      };
    default:
      return state;
  }
}

export function recieveQuestionsStateReducer(state = {}, action) {
  switch (action.type) {
    case RECIEVE_QUESTIONS_STATE:
      return { ...state, ...action.payload.questionsState };
    default:
      return state;
  }
}
