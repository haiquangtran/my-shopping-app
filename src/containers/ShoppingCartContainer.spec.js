import React from 'react';
import { shallow } from 'enzyme';
import { ShoppingCartContainer } from './ShoppingCartContainer';
import ShoppingCartProductDisplay from '../components/ShoppingCartProductDisplay';

const setup = props => {
  const container = shallow(<ShoppingCartContainer {...props} />);
  return {
    container: container,
    cartContainer: container.find('.shopping-cart'),
  };
};

describe('ShoppingCart container', () => {
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
      shoppingCart: [],
      removeProductFromCart: jest.fn(),
    };
  });

  it('should render shopping cart title', () => {
    const { cartContainer } = setup(props);
    expect(cartContainer.find('h2').text()).toEqual('Shopping cart');
  });

  it('should render shopping cart message about no items being in cart', () => {
    props.shoppingCart = [];
    const { cartContainer } = setup(props);
    expect(cartContainer.contains('No items in shopping cart.')).toBe(true);
  });

  it('should render one ShoppingCartProductDisplay element in the shopping cart', () => {
    props.shoppingCart = [mockProduct];
    const { cartContainer } = setup(props);
    expect(cartContainer.find(ShoppingCartProductDisplay)).toHaveLength(1);
  });

  it('should render two ShoppingCartProductDisplay elements in the shopping cart', () => {
    props.shoppingCart = [mockProduct, mockProduct];
    const { cartContainer } = setup(props);
    expect(cartContainer.find(ShoppingCartProductDisplay)).toHaveLength(2);
  });
});
