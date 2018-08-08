import { SET_LOADING } from '../actions/index';

export default function authentication(state = false, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.payload.loading;
    default:
      return state;
  }
}
