import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ShoppingCartProductDisplay from '../components/ShoppingCartProductDisplay';
import ShoppingCartList from '../components/ShoppingCartList';
import { removeProductFromCart } from '../actions/';
import './ShoppingCartContainer.scss';

export class ShoppingCartContainer extends Component {
  render() {
    const { shoppingCart, removeProductFromCart } = this.props;
    const hasShoppingCartItems = shoppingCart.length > 0;
    return (
      <section className="shopping-cart" tabIndex="0">
        <h2>Shopping cart</h2>
        <ShoppingCartList>
          {hasShoppingCartItems &&
            shoppingCart.map(cartProduct => (
              <ShoppingCartProductDisplay
                key={cartProduct.productName}
                product={cartProduct}
                removeProductFromCart={() => removeProductFromCart(cartProduct)}
              />
            ))}
          {!hasShoppingCartItems && <span>No items in shopping cart.</span>}
        </ShoppingCartList>
      </section>
    );
  }
}

ShoppingCartContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      productName: PropTypes.string.isRequired,
      productImage: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      isPublished: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart,
});

export default connect(
  mapStateToProps,
  { removeProductFromCart }
)(ShoppingCartContainer);
