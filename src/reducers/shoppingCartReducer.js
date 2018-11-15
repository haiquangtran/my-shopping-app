import * as types from '../constants/actionTypes';

export const initialState = [];

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      return [...state, action.payload];
    case types.REMOVE_PRODUCT_FROM_CART:
      return state.filter(
        product => product.productName !== action.payload.productName
      );
    default:
      return state;
  }
};

export default shoppingCartReducer;
