import shoppingCartReducer, { initialState } from './shoppingCartReducer';
import * as types from '../constants/actionTypes';

describe('shoppingCart reducer', () => {
  let mockProduct;

  beforeEach(() => {
    mockProduct = {
      productName: 'test1',
      isPublished: 'true',
      productImage: 'testImage1',
      price: '10'
    };
  });

  it('should return the initial state', () => {
    expect(shoppingCartReducer(undefined, {})).toEqual(initialState);
  });

  it('should add product to shopping cart list when action ADD_PRODUCT_TO_CART is dispatched', () => {
    expect(
      shoppingCartReducer(undefined, {
        type: types.ADD_PRODUCT_TO_CART,
        payload: mockProduct
      })
    ).toEqual([mockProduct]);
  });

  it('should remove product from shopping cart list when action REMOVE_PRODUCT_FROM_CART is dispatched', () => {
    const state = [mockProduct];
    expect(
      shoppingCartReducer(state, {
        type: types.REMOVE_PRODUCT_FROM_CART,
        payload: mockProduct
      })
    ).toEqual([]);
  });
});
