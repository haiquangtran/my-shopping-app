import React from 'react';
import { shallow } from 'enzyme';
import ShoppingCartList from './ShoppingCartList';

const setup = children => {
  const component = shallow(<ShoppingCartList {...children} />);
  return {
    component: component,
  };
};

describe('ShoppingCartList component', () => {
  it('should render children', () => {
    const children = { children: 'Test child' };
    const { component } = setup(children);
    expect(component.children().text()).toEqual(children.children);
  });
});
