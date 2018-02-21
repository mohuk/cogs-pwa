import * as React from 'react';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HeaderContainer } from './Header/Header';
import { LoginContainer } from './Login/Login';

import './App.css';

const App = () => (

  <MuiThemeProvider>
    <div>
      <HeaderContainer />
      <Route exact={true} path="/login" component={LoginContainer} />
    </div>
  </MuiThemeProvider>

);

export default App;
