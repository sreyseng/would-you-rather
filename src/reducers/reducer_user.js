import { RECIEVE_USERS } from '../actions/index';

export default function authedUser(state = {}, action) {
  switch (action.type) {
    case RECIEVE_USERS:
      console.log('RECIEVE_USERS :', action.payload);
      return { ...state, ...action.payload.users };
    default:
      return state;
  }
}
