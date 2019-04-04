import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
import ShoppingCartContainer from './ShoppingCartContainer';
import { Container, Row, Col } from 'reactstrap';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center align-middle">My Shopping App</h1>
        <Container fluid>
          <Row noGutters>
            <Col xs={12} sm={6} md={7} lg={9}>
              <ProductsContainer />
            </Col>
            <Col
              xs={{ size: 12, order: 'first' }}
              sm={{ size: 6, order: 2 }}
              md={5}
              lg={3}
            >
              <ShoppingCartContainer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
