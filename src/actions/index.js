export const actionUpdate = (payload, currenciesPayload, id) => ({
  type: 'UPDATE_EXPENSES',
  payload,
  currenciesPayload,
  id,
});

export const infoForm = (payload, exchangeRates) => ({
  type: 'INFO_FORM',
  payload: { ...payload, exchangeRates },
});

export const receiveCoins = (payload) => ({
  type: 'RECEIVE_WALLET',
  payload,
});

export const infoLogin = (user) => ({
  type: 'SET_LOGIN',
  user,
});

export const calculateValues = () => ({
  type: 'CALCULATE_VALUES',
});

export const sumValues = (array) => {
  if (array.length === 0) return 0;
  return array.reduce((acc, cur) => {
    const { value, currency, exchangeRates } = cur;
    acc += Number(value) * Number(exchangeRates[currency].ask);
    return acc;
  }, 0);
};

export const fetchCoins = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const payload = await response.json();
  const total = Object.keys(payload).filter((element) => element !== 'USDT');
  return dispatch(receiveCoins(total));
};

export const fetchExpenses = (payload) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const receiveAPI = await response.json();
  return dispatch(infoForm(payload, receiveAPI));
};
