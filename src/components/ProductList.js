import React from 'react';
import ProductPreview from './ProductPreview';

const ProductList = props => {
  if (!props.products) {
    return (
      <div >Loading...</div>
    );
  }

  if (props.products.length === 0) {
    return (
      <div >
        No products are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.products.map(product => {
          return (
            <ProductPreview product={product} key={product._id} />
            );
        })
      }
    </div>
  );
};

export default ProductList;