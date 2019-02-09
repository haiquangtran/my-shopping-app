import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import './ProductDisplay.css';

const ProductDisplay = ({ product, addProductToCart }) => (
  <Card className='text-center product-card' outline xs={3} tabIndex='0'>
    <CardBody>
      <CardTitle>{product.productName}</CardTitle>
    </CardBody>
    <CardImg
      className='product-image'
      src={product.productImage}
      alt={product.productName}
    />
    <CardBody>
      <CardText>
        <strong>{'$' + product.price}</strong>
      </CardText>
      <Button
        className='product-add-to-cart-btn'
        name='add-to-cart-button'
        role='button'
        aria-label='Add to cart'
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </CardBody>
  </Card>
);

ProductDisplay.propTypes = {
  product: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    productImage: PropTypes.string.isRequired,
    isPublished: PropTypes.string.isRequired
  }),
  addProductToCart: PropTypes.func.isRequired
};

export default ProductDisplay;
