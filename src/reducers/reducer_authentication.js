import { SET_AUTHENTICATION, REMOVE_AUTHENTICATION } from '../actions/index';

export default function authentication(state = null, action) {
  switch (action.type) {
    case REMOVE_AUTHENTICATION:
      console.log('REMOVE_AUTHENTICATION :', action.payload.authentication);
      return action.payload.authentication;
    case SET_AUTHENTICATION:
      console.log('SET_AUTHENTICATION :', action.payload.authentication);
      return action.payload.authentication;
    default:
      return state;
  }
}
