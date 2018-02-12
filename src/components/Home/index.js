import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
// const Promise = global.Promise; // is this needed???

const mapStateToProps = state => ({
  appName: state.appName
});

const mapDispatchToProps = dispatch => ({
  getProducts: (payload) =>
    // dispatch({ type: 'HOME_PAGE_LOADED', payload }),
    dispatch({ type: 'PRODUCTS_LOADED', payload }),
});

class Home extends React.Component {
  componentWillMount() {
    // this.props.onLoad(agent.Articles.all());
    this.props.getProducts(agent.Products.all());
    // console.log(this.props.products)
  }

  render() {
    return (
      <div className="home-page">

        <Banner appName={this.props.appName} />

        <div className="container page">
          <div className="row">
            <MainView />

            <div className="col-md-3">
              <div className="sidebar">

                <p>Popular Tags</p>

              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);