import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchCoins } from '../actions';
import Header from './Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { setFetch } = this.props;
    setFetch();
  }

  render() {
    const { user, total } = this.props;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <h2 data-testid="email-field">
          {user.email}
        </h2>
        <Header />
        <h4 data-testid="header-currency-field">
          BRL
        </h4>
        <h3 data-testid="total-field">
          {total.toFixed(2)}
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
  total: state.wallet.total,
});

const mapDispatchToProps = (dispatch) => ({
  setFetch: () => dispatch(fetchCoins()),
});

Wallet.propTypes = {
  user: propTypes.object,
  email: propTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
