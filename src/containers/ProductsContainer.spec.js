import React from 'react';
import { shallow } from 'enzyme';
import { ProductsContainer } from './ProductsContainer';
import ProductDisplay from '../components/ProductDisplay';

const setup = props => {
  const container = shallow(<ProductsContainer {...props} />);
  return {
    container: container,
    productsSection: container.find('.products'),
  };
};

describe('Products container', () => {
  let props;
  let mockProduct;

  beforeEach(() => {
    mockProduct = {
      productName: 'test1',
      isPublished: 'true',
      productImage: 'testImage1',
      price: '10',
    };
    props = {
      products: [],
      addProductToCart: jest.fn(),
    };
  });

  it('should render one ProductDisplay element in the products section', () => {
    props.products = [mockProduct];
    const { productsSection } = setup(props);
    expect(productsSection.find(ProductDisplay)).toHaveLength(1);
  });

  it('should render two ProductDisplay elements in the products section', () => {
    props.products = [mockProduct, mockProduct];
    const { productsSection } = setup(props);
    expect(productsSection.find(ProductDisplay)).toHaveLength(2);
  });
});
