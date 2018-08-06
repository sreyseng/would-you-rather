export const SET_AUTHENTICATION = 'SET_AUTHENTICATION';

export function handleLogin(id) {
  return {
    type: SET_AUTHENTICATION,
    payload: {
      id
    }
  };
}
