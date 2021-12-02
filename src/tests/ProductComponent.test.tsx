import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { ProductComponent } from '../components/productComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Test for text: <ProductComponent/>', () => {
  it('Check if components has text', () => {
    const wrapper = shallow(<ProductComponent />);
    expect(wrapper.text().includes('hello')).toBe(true);
  })
})

