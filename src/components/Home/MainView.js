import ProductList from '../ProductList';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  articles: state.articles,
  products: state.products
});

const MainView = props => {
  console.log(props)
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">

        <li className="nav-item">
          <a
            href=""
            className="nav-link active">
            Global Feed
          </a>
        </li>

        </ul>
      </div>

      <ProductList
        products={props.products} 
      />
    </div>
  );
};

export default connect(mapStateToProps, () => ({}))(MainView);