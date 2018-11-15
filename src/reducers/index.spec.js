import reducer from './index';
import * as types from '../constants/actionTypes';

describe('index reducer', () => {
  let mockProduct;

  beforeEach(() => {
    mockProduct = {
      productName: 'test1',
      isPublished: 'true',
      productImage: 'testImage1',
      price: '10',
    };
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      products: [],
      shoppingCart: [],
    });
  });

  it('should move product from products list into shopping cart list', () => {
    const state = {
      products: [mockProduct],
      shoppingCart: [],
    };
    expect(
      reducer(state, {
        type: types.ADD_PRODUCT_TO_CART,
        payload: mockProduct,
      })
    ).toEqual({
      products: [],
      shoppingCart: [mockProduct],
    });
  });

  it('should remove product from shopping cart list and add it into the products list', () => {
    const state = {
      products: [],
      shoppingCart: [mockProduct],
    };
    expect(
      reducer(state, {
        type: types.REMOVE_PRODUCT_FROM_CART,
        payload: mockProduct,
      })
    ).toEqual({
      products: [mockProduct],
      shoppingCart: [],
    });
  });
});
