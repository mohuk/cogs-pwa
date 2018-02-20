import * as React from 'react';
import { FlatButton } from 'material-ui';

class Login extends React.Component {
  static muiName = 'FlatButton';
  render() {
    return (
      <FlatButton {...this.props} label="login"/>
    );
  }
}

export default Login;
