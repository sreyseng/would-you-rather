import { RECIEVE_USERS } from '../actions/index';

export default function authedUser(state = {}, action) {
  switch (action.type) {
    case RECIEVE_USERS:
      return { ...state, ...action.payload.users };
    default:
      return state;
  }
}
