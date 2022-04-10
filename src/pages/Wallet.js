import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchCoins } from '../actions';
import Header from './Header';
import './Wallet.css';

class Wallet extends React.Component {
  componentDidMount() {
    const { setFetch } = this.props;
    setFetch();
  }

  render() {
    const { user, total, expenses } = this.props;
    const mil = 1000;
    const btnExcluir = <button type="button" data-testid="delete-btn">Excluir</button>;
    const btnEditar = <button type="button" data-testid="edit-btn">Editar</button>;
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
          {total === undefined ? 0 : total.toFixed(2)}
        </h3>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          {expenses.map((e) => (
            <tbody key={ Math.random() * mil }>
              <tr>
                <td>{e.description}</td>
                <td>{e.tag}</td>
                <td>{e.method}</td>
                <td>{parseFloat(e.value).toFixed(2)}</td>
                <td>{e.exchangeRates[e.currency].name}</td>
                <td>
                  {parseFloat(parseFloat(Number(e
                    .exchangeRates[e.currency].ask))).toFixed(2)}
                </td>
                <td>
                  {parseFloat(Number(e.exchangeRates[e.currency].ask)
                    * Number(e.value)).toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  {btnEditar}
                  {btnExcluir}
                </td>
              </tr>
            </tbody>))}
        </table>
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
