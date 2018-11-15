import React from 'react';
import { shallow } from 'enzyme';
import ProductDisplay from './ProductDisplay';

const setup = props => {
  const component = shallow(<ProductDisplay {...props} />);
  return {
    component: component
  };
};

describe('ProductDisplay component', () => {
  let props;
  let mockProduct;

  beforeEach(() => {
    mockProduct = {
      productName: 'test1',
      isPublished: 'true',
      productImage: 'testImage1',
      price: '10'
    };
    props = {
      product: mockProduct,
      addProductToCart: jest.fn()
    };
  });

  it('should render product display name', () => {
    const { component } = setup(props);
    expect(component.contains(mockProduct.productName)).toBe(true);
  });

  it('should render product display image', () => {
    const { component } = setup(props);
    expect(component.find('.product-image').props()).toEqual({
      src: mockProduct.productImage,
      alt: mockProduct.productName,
      className: 'product-image',
      tag: 'img'
    });
  });

  it('should render product display price', () => {
    const { component } = setup(props);
    expect(component.contains('$' + mockProduct.price)).toBe(true);
  });

  it('should render add to cart button message', () => {
    const { component } = setup(props);
    expect(component.find('Button').props().children).toEqual('Add to cart');
  });

  it('should call action on add to cart button click', () => {
    let addProductToCartAction = jest.fn();
    props.addProductToCart = addProductToCartAction;
    const { component } = setup(props);

    component.find('Button').simulate('click');
    expect(addProductToCartAction).toBeCalled();
  });
});
