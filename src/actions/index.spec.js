import * as actions from './index';
import * as types from '../constants/actionTypes';

describe('actions', () => {
  let mockProduct;

  beforeEach(() => {
    mockProduct = {
      productName: 'test1',
      isPublished: 'true',
      productImage: 'testImage1',
      price: '10',
    };
  });

  it('should create an action to add a product to shopping cart', () => {
    const expectedAction = {
      type: types.ADD_PRODUCT_TO_CART,
      payload: mockProduct,
    };
    expect(actions.addProductToCart(mockProduct)).toEqual(expectedAction);
  });

  it('should create an action to remove a product from shopping cart', () => {
    const expectedAction = {
      type: types.REMOVE_PRODUCT_FROM_CART,
      payload: mockProduct,
    };
    expect(actions.removeProductFromCart(mockProduct)).toEqual(expectedAction);
  });
});
