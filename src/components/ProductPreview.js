import React from 'react';

const ProductPreview = props => {
  const {product} = props;

  return (
    <div >
    {product.name}
    </div>
  );
}

export default ProductPreview;