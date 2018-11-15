import React from 'react';
import PropTypes from 'prop-types';

const ProductsList = ({ children }) => (
  <div className="products-list">{children}</div>
);

ProductsList.propTypes = {
  name: PropTypes.string,
  productImageUrl: PropTypes.string,
  price: PropTypes.string,
  isPublished: PropTypes.string
};

export default ProductsList;
