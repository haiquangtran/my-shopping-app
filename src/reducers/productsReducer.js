import * as types from '../constants/actionTypes';

export const initialState = [];

export const getPublishedProducts = products => {
  return products.filter(product => product.isPublished === 'true');
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PUBLISHED_PRODUCTS:
      return getPublishedProducts(action.payload);
    case types.ADD_PRODUCT_TO_CART:
      return state.filter(
        product => product.productName !== action.payload.productName
      );
    case types.REMOVE_PRODUCT_FROM_CART:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default productsReducer;
