// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INICIAL_STATE = {
  expenses: [],
  currencies: ['BRL'],
  total: 0,
};

const sumValues = (array) => {
  if (array.length === 0) return 0;
  return array.reduce((acc, cur) => {
    const { value, currency, exchangeRates } = cur;
    acc += Number(value) * Number(exchangeRates[currency].ask);
    return acc;
  }, 0);
};

function wallet(state = INICIAL_STATE, action) {
  switch (action.type) {
  case 'RECEIVE_WALLET':
    return {
      ...state,
      currencies: action.payload,
    };
  case 'INFO_FORM':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      total: sumValues([...state.expenses, action.payload]),
    };
  default:
    return state;
  }
}

export default wallet;
