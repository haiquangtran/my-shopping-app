import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList';
import ProductDisplay from '../components/ProductDisplay';
import { addProductToCart } from '../actions';
import { Row, Col } from 'reactstrap';

export class ProductsContainer extends Component {
  render() {
    const { products, addProductToCart } = this.props;
    return (
      <section className="products">
        <ProductsList>
          <Row noGutters>
            {products.map(product => (
              <Col
                key={product.productName}
                xs={12}
                md={6}
                lg={4}
                className="p-2"
              >
                <ProductDisplay
                  product={product}
                  addProductToCart={() => addProductToCart(product)}
                />
              </Col>
            ))}
          </Row>
        </ProductsList>
      </section>
    );
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      productName: PropTypes.string.isRequired,
      productImage: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      isPublished: PropTypes.string.isRequired,
    })
  ).isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(
  mapStateToProps,
  { addProductToCart }
)(ProductsContainer);
