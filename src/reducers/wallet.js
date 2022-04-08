// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// import { RECEIVE_WALLET } from '../actions/index';

const INICIAL_STATE = {
  expenses: [0],
  currencies: ['BRL'],
};

function wallet(state = INICIAL_STATE, action) {
  switch (action.type) {
  case 'RECEIVE_WALLET':
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
}

export default wallet;
