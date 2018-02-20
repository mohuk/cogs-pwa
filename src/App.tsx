import * as React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Header } from './Header/Header';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header/>
      </MuiThemeProvider>
    );
  }
}

export default App;
