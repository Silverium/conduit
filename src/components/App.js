import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const mapStateToPropsAsdf = state => ({
  appName: state.appName
});
// const App2 = props => (
//   <div>
//     {props.appName}
//   </div>
// );
function App2(props) {
  return (
    <div>
    <Header appName={props.appName} />
      {props.appName}
    </div>);
}
// class App extends React.Component {

//   render() {
//     return (
//       <div>
// <Header appName={this.props.appName} />
//         {this.props.appName}
//       </div>);
//   }
// }
export default connect(mapStateToPropsAsdf, () => ({}))(App2);