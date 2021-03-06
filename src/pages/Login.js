import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { infoLogin } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
      isLoading: true,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.checkValidations());
  };

  // Validação com Regex que cobre mais casos
  // checkInputs = () => {
  //   const six = 6;
  //   const { senha, email } = this.state;
  //   const result = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  //   return result.test(email) && senha.length >= six
  //     ? this.setState({ isLoading: false })
  //     : this.setState({ isLoading: true });
  // }

  // Validação com includes que cobre poucos casos;

  checkValidations = () => {
    const six = 6;
    const { senha, email } = this.state;
    if (senha.length >= six
      && email.includes('@')
      && email.includes('.com')) {
      return this.setState({ isLoading: false });
    }
    return this.setState({ isLoading: true });
  };

  render() {
    const { email, senha, isLoading } = this.state;
    const { history, setUserLogin } = this.props;
    return (
      <fieldset>
        <label htmlFor="email">
          <input
            type="email"
            value={ email }
            name="email"
            data-testid="email-input"
            required
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="senha">
          <input
            type="password"
            value={ senha }
            data-testid="password-input"
            name="senha"
            required
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          label="Enviar"
          disabled={ isLoading }
          onClick={ () => {
            setUserLogin(this.state);
            history.push('/carteira');
          } }
        >
          Entrar

        </button>

      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserLogin: (user) => dispatch(infoLogin(user)),
});

Login.propTypes = {
  setUserLogin: propTypes.func,
  history: propTypes.shape({
    push: propTypes.func,
  }),
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
