// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { sumValues } from '../actions/index';

const INICIAL_STATE = {
  expenses: [],
  currencies: ['BRL'],
  total: 0,
};

function filterExpenses(arrayOfExpenses, id) {
  const expensesFilter = arrayOfExpenses.filter((e) => Number(e.id) !== Number(id));
  return expensesFilter;
}

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
  case 'UPDATE_EXPENSES':
    return {
      ...state,
      expenses: filterExpenses([...action.payload], action.id),
      currencies: [...action.currenciesPayload],
      total: sumValues(filterExpenses([...action.payload], action.id)),
    };
  case 'CALCULATE_VALUES':
    return {
      ...state,
      total: sumValues([...state.expenses]),
    };
  default:
    return state;
  }
}

export default wallet;
