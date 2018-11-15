import React from 'react';
import { shallow } from 'enzyme';
import ShoppingCartProductDisplay from './ShoppingCartProductDisplay';

const setup = props => {
  const component = shallow(<ShoppingCartProductDisplay {...props} />);
  return {
    component: component,
  };
};

describe('ShoppingCartProductDisplay component', () => {
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
      product: mockProduct,
      removeProductFromCart: jest.fn(),
    };
  });

  it('should render shopping cart product display name', () => {
    const { component } = setup(props);
    expect(component.contains(mockProduct.productName)).toBe(true);
  });

  it('should render remove from cart button message', () => {
    const { component } = setup(props);
    expect(component.find('Button').props().children).toEqual('Remove');
  });

  it('should call action on remove from cart button click', () => {
    let removeProductFromCartAction = jest.fn();
    props.removeProductFromCart = removeProductFromCartAction;
    const { component } = setup(props);

    component.find('Button').simulate('click');
    expect(removeProductFromCartAction).toBeCalled();
  });
});
