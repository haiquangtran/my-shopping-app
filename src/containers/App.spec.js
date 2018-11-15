import React from 'react';
import App from './App';
import ProductsContainer from './ProductsContainer';
import ShoppingCartContainer from './ShoppingCartContainer';
import { shallow } from 'enzyme';

const setup = {
  container: shallow(<App />)
};

describe('App container', () => {
  const { container } = setup;

  it('should render the app title', () => {
    expect(container.find('h1').text()).toEqual('My Shopping App');
  });

  it('should render ProductsContainer element', () => {
    const { container } = setup;
    expect(container.contains(<ProductsContainer />)).toBe(true);
  });

  it('should render ShoppingCartContainer element', () => {
    const { container } = setup;
    expect(container.contains(<ShoppingCartContainer />)).toBe(true);
  });
});
