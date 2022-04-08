import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor:
          <input type="number" name="valor" data-testid="value-input" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" name="descricao" data-testid="description-input" />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select data-testid="currency-input" name="Moeda" id="Moeda">
            {currencies
              .map((element, i) => (<option key={ i }>{element}</option>))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Pagamento:
          <select data-testid="method-input">
            <option value="dinheiro">Dinheiro</option>
            <option value="crédito">Cartão de crédito</option>
            <option value="débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categorias">
          Categorias:
          <select data-testid="tag-input">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Header.propTypes = {
  currencies: PropTypes.obj,
}.isRequired;

export default connect(mapStateToProps)(Header);
