// Esse reducer será responsável por tratar as informações da pessoa usuária
const INICIAL_STATE = {};

function infoLogin(state = INICIAL_STATE, action) {
  switch (action.type) {
  case 'SET_LOGIN':
    return { ...action.user };
  default:
    return state;
  }
}

export default infoLogin;
