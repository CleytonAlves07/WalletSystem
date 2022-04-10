import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchExpenses } from '../actions';

const alimentacao = 'Alimentação';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
    };
  }

  handleClick = () => {
    const { setInfoForm, expenses } = this.props;
    setInfoForm({ id: expenses.length, ...this.state });
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    const { currencies } = this.props;
    return (
      <form action="submit">
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            value={ value }
            name="value"
            onChange={ this.handleChange }
            data-testid="value-input"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            value={ description }
            name="description"
            onChange={ this.handleChange }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select
            value={ currency }
            name="currency"
            id="Moeda"
            onChange={ this.handleChange }
            data-testid="currency-input"
          >
            {currencies
              .map((element, i) => (<option key={ i }>{element}</option>))}
          </select>
        </label>
        <label htmlFor="method">
          Pagamento:
          <select
            value={ method }
            name="method"
            id="method"
            onChange={ this.handleChange }
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categorias:
          <select
            value={ tag }
            name="tag"
            id="tag"
            onChange={ this.handleChange }
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => {
            this.handleClick();
          } }
        >
          Adicionar despesa

        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setInfoForm: (payload) => dispatch(fetchExpenses(payload)),
});

Header.propTypes = {
  currencies: PropTypes.obj,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
