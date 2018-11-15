import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { getAllProducts } from '../actions';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(getAllProducts());

export default store;
