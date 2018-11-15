import React from 'react';
import { shallow } from 'enzyme';
import ProductsList from './ProductsList';

const setup = children => {
  const component = shallow(<ProductsList {...children} />);
  return {
    component: component
  };
};

describe('ProductsList component', () => {
  it('should render children', () => {
    const children = { children: 'Test child' };
    const { component } = setup(children);
    expect(component.children().text()).toEqual(children.children);
  });
});
