import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { GridComponent } from '../components/GridComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Test for text: <ProductComponent/>', () => {
  it('should check if <GridComponent/> is rendered', () => {
    const wrapper = shallow(<GridComponent />);
    expect(wrapper.exists()).toBe(true);
  });
});
