import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { GridComponent, Filter } from '../components/GridComponent';
import { screen } from '@testing-library/react';

Enzyme.configure({ adapter: new Adapter() });

describe('Test for text: <ProductComponent/>', () => {
  it('should check if <GridComponent/> is rendered', () => {
    const wrapper = shallow(<GridComponent />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should check that GridComponent/> has a length of 9', () => {
    const wrapper = shallow(<GridComponent />);
    expect(wrapper.find('ProductComponent').length).toBe(9);
  });
  it('should have a filter input', () => {
    const wrapper = shallow(<GridComponent />);
    expect(wrapper.find(Filter)).toHaveLength(1);
  });
});
