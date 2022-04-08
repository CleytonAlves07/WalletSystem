import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchExpenses } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { setFetch } = this.props;
    setFetch();
  }

  render() {
    const { user, expenses, currencies } = this.props;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <h2 data-testid="email-field">
          {user.email}
        </h2>
        <h4 data-testid="header-currency-field">
          Câmbio:
          {' '}
          {currencies}
        </h4>
        <h3 data-testid="total-field">
          Despesa Total:
          {' '}
          {expenses}

        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
  currencies: state.wallet.currencies,
  // expenses: state.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setFetch: () => dispatch(fetchExpenses()),
});

Wallet.propTypes = {
  user: propTypes.object,
  email: propTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { receiveExpenses } from '../actions';

// const Wallet = (props) => {
//   const [expenses, setExpenses] = useState([0]);
//   const [currencies, setCurrencies] = useState(['BRL']);
//   const dispatch = useDispatch();

//   const fetchExpenses = () => async () => {
//     const response = await fetch('https://economia.awesomeapi.com.br/json/all');
//     const payload = await response.json();
//     return dispatch(receiveExpenses(payload));
//   };
//   useEffect(() => {
//     fetchExpenses();
//   });

//   return (
//     <div>
//       <h1>TrybeWallet</h1>
//       <h2 data-testid="email-field">
//         {/* {user.email} */}
//       </h2>
//       <h4 data-testid="header-currency-field">
//         Câmbio:
//         {' '}
//         {currencies}
//       </h4>
//       <h3 data-testid="total-field">
//         Despesa Total:
//         {' '}
//         {expenses}

//       </h3>
//     </div>
//   );
// };

// export default Wallet;
