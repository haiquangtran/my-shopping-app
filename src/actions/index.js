import productsApi from '../api/productsApi';
import * as types from '../constants/actionTypes';

const retrieveProducts = products => ({
  type: types.GET_PUBLISHED_PRODUCTS,
  payload: products
});

export const getAllProducts = () => dispatch => {
  productsApi.getProducts(products => {
    dispatch(retrieveProducts(products));
  });
};

export const addProductToCart = product => ({
  type: types.ADD_PRODUCT_TO_CART,
  payload: product
});

export const removeProductFromCart = product => ({
  type: types.REMOVE_PRODUCT_FROM_CART,
  payload: product
});
