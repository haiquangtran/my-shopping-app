import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './ShoppingCartProductDisplay.scss';

const ShoppingCartProductDisplay = ({ product, removeProductFromCart }) => (
  <div className="shopping-cart-product" tabIndex="-1">
    <span>{product.productName}</span>
    <Button
      className="btn-danger float-right btn-sm"
      name="remove-from-cart-button"
      role="button"
      aria-label="Remove product from cart"
      onClick={removeProductFromCart}
    >
      Remove
    </Button>
  </div>
);

ShoppingCartProductDisplay.propTypes = {
  product: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    productImage: PropTypes.string.isRequired,
    isPublished: PropTypes.string.isRequired,
  }),
  removeProductFromCart: PropTypes.func.isRequired,
};

export default ShoppingCartProductDisplay;
