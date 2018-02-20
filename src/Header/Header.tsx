import * as React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
// import { AppBar } from 'material-ui';
// import './Login.css';
export const Header = (props: any) => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <button onClick={() => props.changePage()}>Go to about page via redux</button>
  </div>
);

// export class Header extends React.Component {
//   render() {
//     return (
//       <AppBar title="COGS - Generation NEXT" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
//     );
//   }
// }
const param = {
  changePage: () => push('/about-us')
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => bindActionCreators(param, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Header);
