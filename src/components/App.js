import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const mapStateToPropsAsdf = state => ({
  appName: state.appName
});

class App extends Component {

  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        {this.props.children}
      </div>);
  }
}
App.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default connect(mapStateToPropsAsdf, () => ({}))(App);