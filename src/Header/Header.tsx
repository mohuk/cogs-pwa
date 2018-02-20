import { AppBar } from 'material-ui';
import * as React from 'react';
// import './Login.css';

export class Header extends React.Component {
  render() {
    return (
      <AppBar title="COGS - Generation NEXT" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
    );
  }
}
