import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      despesaTotal: '0',
      cambio: 'BRL',
    };
  }

  render() {
    const { despesaTotal, cambio } = this.state;
    const { user } = this.props;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <h2 data-testid="email-field">
          {user.email}
        </h2>
        <h4 data-testid="header-currency-field">
          Câmbio:
          {' '}
          {cambio}
        </h4>
        <h3 data-testid="total-field">
          Despesa Total:
          {' '}
          {despesaTotal}
        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.user });

Wallet.propTypes = {
  user: propTypes.object,
  email: propTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
