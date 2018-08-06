import { SET_AUTHENTICATION } from '../actions/index';

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHENTICATION:
      console.log('SET_AUTHENTICATION :', action.payload.id);
      return action.payload.id;
    default:
      return state;
  }
}
