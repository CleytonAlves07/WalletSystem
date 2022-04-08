// export const RECEIVE_WALLET = 'RECEIVE_WALLET';

export const receiveExpenses = (payload) => ({
  type: 'RECEIVE_WALLET',
  payload,
});

export const infoLogin = (user) => ({
  type: 'SET_LOGIN',
  user,
});

export const fetchExpenses = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const payload = await response.json();
  const total = Object.keys(payload).filter((element) => element !== 'USDT');
  return dispatch(receiveExpenses(total));
};
