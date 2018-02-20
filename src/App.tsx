import * as React from 'react';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Header } from './Header/Header';
import { Login } from './Login/Login';

import './App.css';

const App = () => (
  <MuiThemeProvider>
    <Header/>
    <Route exact={true} path="/login" component={Login}/>
  </MuiThemeProvider>
);

export default App;
