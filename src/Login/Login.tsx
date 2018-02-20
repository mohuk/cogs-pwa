import { RaisedButton, TextField } from 'material-ui';
import  './Login.css';
// import axios from 'axios';
import * as React from 'react';
interface LoginProps {

}

interface LoginState {
  username: string;
  password: string;
}

const style = {
  margin: 15,
};

export class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleClick() {
    // var apiBaseUrl = 'https://cogs.10pearls.com/cogsapi/api/auth/login';

    // console.log('inside handleclick', this.state);
  }

  render() {
    return (
      <div className="login-container">
        <TextField
          hintText="Enter your Username"
          floatingLabelText="Username"
          onChange={(event, newValue) => this.setState({ username: newValue })}
        />
        <br />
        <TextField
          type="password"
          hintText="Enter your Password"
          floatingLabelText="Password"
          onChange={(event, newValue) => this.setState({ password: newValue })}
        />
        <br />
        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick()} />
      </div>
    );
  }
}
