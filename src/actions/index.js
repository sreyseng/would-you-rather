import _ from 'lodash';

import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';

export const SET_AUTHENTICATION = 'SET_AUTHENTICATION';
export const REMOVE_AUTHENTICATION = 'REMOVE_AUTHENTICATION';
export const RECIEVE_USERS = 'RECIEVE_USERS';
export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS';
export const RECIEVE_QUESTIONS_STATE = 'RECIEVE_QUESTIONS_STATE';
export const ADD_QUESTION = 'ADD_QUESTION';

/**
 * USER / USER AUTHENTICATION
 */

export function handleLogout() {
  return {
    type: REMOVE_AUTHENTICATION,
    payload: {
      authentication: null
    }
  };
}

export function loginUser(id) {
  return {
    type: SET_AUTHENTICATION,
    payload: {
      authentication: id
    }
  };
}

export function handleAuthenticateUser(id) {
  return (dispatch) => {
    return _getUsers().then((users) => {
      const authenticatedUser = users[id];
      if (authenticatedUser) {
        console.log('user authenticated, claling get questions');
        dispatch(loginUser(authenticatedUser.id));
        dispatch(handleGetQuestions(id));
      }
    });
  };
}

function recieveUsers(users) {
  return {
    type: RECIEVE_USERS,
    payload: {
      users
    }
  };
}

export function handleGetUsers(callback) {
  return (dispatch) => {
    return _getUsers().then((users) => {
      dispatch(recieveUsers(users));

      //todo: REMOVE - auto login during dev
      dispatch(handleAuthenticateUser('tylermcginnis'));
    });
  };
}

/**
 * QUESTIONS
 */

function recieveQuestions(questions) {
  return {
    type: RECIEVE_QUESTIONS,
    payload: {
      questions
    }
  };
}

export function handleGetQuestions(authentication) {
  return (dispatch) => {
    return _getQuestions().then((questions) => {
      dispatch(recieveQuestions(questions));
      dispatch(handleGetQuestionsState(setStateForAuthentedUser(questions, authentication)));
    });
  };
}

function handleGetQuestionsState(questionsState) {
  return {
    type: RECIEVE_QUESTIONS_STATE,
    payload: {
      questionsState
    }
  };
}

function setStateForAuthentedUser(questions, authentication) {
  return _.keyBy(
    _.map(questions, (question) => {
      const obj = {};
      const optionOne = _.filter(question.optionOne.votes, (item) => {
        return item === authentication;
      });
      const optionTwo = _.filter(question.optionTwo.votes, (item) => {
        return item === authentication;
      });

      obj['id'] = question.id;
      if ((optionOne && optionOne.length > 0) || (optionTwo && optionTwo.length > 0)) {
        obj['option'] = {
          vote: optionOne && optionOne.length > 0 ? 'optionOne' : 'optionTwo'
        };
      }
      return obj;
    }),
    'id'
  );
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    payload: {
      question
    }
  };
}

export function handleAddQuestion(question, callback) {
  return (dispatch) => {
    return _saveQuestion(question).then((result) => {
      dispatch(addQuestion(result));
      dispatch(handleGetUsers());
      callback();
    });
  };
}

export function handleAnswerQuestion(answer) {
  return (dispatch) => {
    return _saveQuestionAnswer(answer).then(() => {
      dispatch(handleGetUsers());
      dispatch(handleGetQuestions(answer.authedUser));
    });
  };
}
