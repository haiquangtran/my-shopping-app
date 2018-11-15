import productsReducer, { initialState } from './productsReducer';
import * as types from '../constants/actionTypes';

describe('products reducer', () => {
  let mockPublishedProduct;
  let mockUnpublishedProduct;

  beforeEach(() => {
    mockPublishedProduct = {
      productName: 'test1',
      isPublished: 'true',
      productImage: 'testImage1',
      price: '10',
    };

    mockUnpublishedProduct = {
      productName: 'test2',
      isPublished: 'false',
      productImage: 'testImage2',
      price: '20',
    };
  });

  it('should return the initial state', () => {
    expect(productsReducer(undefined, {})).toEqual(initialState);
  });

  it('should only return published products when action GET_PUBLISHED_PRODUCTS is dispatched', () => {
    expect(
      productsReducer(undefined, {
        type: types.GET_PUBLISHED_PRODUCTS,
        payload: [mockPublishedProduct, mockUnpublishedProduct],
      })
    ).toEqual([mockPublishedProduct]);
  });

  it('should remove product from products list when action ADD_PRODUCT_TO_CART is dispatched', () => {
    const state = [mockPublishedProduct];
    expect(
      productsReducer(state, {
        type: types.ADD_PRODUCT_TO_CART,
        payload: mockPublishedProduct,
      })
    ).toEqual([]);
  });

  it('should add product to products list when action REMOVE_PRODUCT_FROM_CART is dispatched', () => {
    expect(
      productsReducer(undefined, {
        type: types.REMOVE_PRODUCT_FROM_CART,
        payload: mockPublishedProduct,
      })
    ).toEqual([mockPublishedProduct]);
  });
});
