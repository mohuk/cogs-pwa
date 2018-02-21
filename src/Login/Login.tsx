import { RaisedButton, TextField } from 'material-ui';
import { connect } from 'react-redux';
import './Login.css';
import { login } from '../modules/login';
import * as React from 'react';

const style = {
  margin: 15,
};

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e: any) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }

  render() {
    let { isLoginSuccess, loginError } = this.props;
    return (
      <div className="login-container">
        <form name="loginForm" onSubmit={this.onSubmit}>
          <TextField
            hintText="Enter your Username"
            floatingLabelText="Username"
            onChange={(e: any) => this.setState({ email: e.target.value })}
            value={this.state.email}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(e: any) => this.setState({ password: e.target.value })}
            value={this.state.password}
          />
          <br />
          <RaisedButton
            label="Submit"
            type="submit"
            primary={true}
            style={style}
          />

          <div className="message">
            {isLoginSuccess && <div>Success.</div>}
            {loginError && <div>Failed</div>}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginSuccess: state.login.isLoginSuccess,
    loginError: state.login.loginError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
