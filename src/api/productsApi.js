/**
 * Mock/stub requests to API
 */
import products from './products.json';

const TIMEOUT = 100;

export default {
  getProducts: (callback, timeout) =>
    setTimeout(() => callback(products), timeout || TIMEOUT),
};
