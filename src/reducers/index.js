import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import shoppingCartReducer from './shoppingCartReducer';

export default combineReducers({
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
});
