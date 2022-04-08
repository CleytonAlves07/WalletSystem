import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchExpenses } from '../actions';
import Header from './Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [0],
      currencies: ['BRL'],
    };
  }

  componentDidMount() {
    const { setFetch } = this.props;
    setFetch();
  }

  render() {
    const { expenses, currencies } = this.state;
    const { user } = this.props;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <h2 data-testid="email-field">
          {user.email}
        </h2>
        <Header />
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
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setFetch: () => dispatch(fetchExpenses()),
});

Wallet.propTypes = {
  user: propTypes.object,
  email: propTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
