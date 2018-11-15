import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCartList = ({ children }) => (
  <div className="shopping-cart-list">{children}</div>
);

ShoppingCartList.propTypes = {
  name: PropTypes.string,
  productImageUrl: PropTypes.string,
  price: PropTypes.string,
  isPublished: PropTypes.string,
};

export default ShoppingCartList;
