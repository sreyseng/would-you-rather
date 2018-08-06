import { _getUsers } from '../utils/_DATA';

export const SET_AUTHENTICATION = 'SET_AUTHENTICATION';
export const REMOVE_AUTHENTICATION = 'REMOVE_AUTHENTICATION';
export const RECIEVE_USERS = 'RECIEVE_USERS';

export function handleLogout() {
  return {
    type: REMOVE_AUTHENTICATION,
    payload: {
      authentication: null
    }
  };
}

export function handleLogin(id) {
  return {
    type: SET_AUTHENTICATION,
    payload: {
      authentication: id
    }
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

export function handleGetUsers() {
  return (dispatch) => {
    return _getUsers().then((users) => {
      dispatch(recieveUsers(users));

      //todo: REMOVE - auto login during dev
      dispatch(handleLogin('tylermcginnis'));
    });
  };
}
