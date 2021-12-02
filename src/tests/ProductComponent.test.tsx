import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ProductComponent } from '../components/ProductComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Test for text: <ProductComponent/>', () => {
  it('should check if <ProductComponent/> is rendered', () => {
    const wrapper = shallow(
      <ProductComponent name='Magnum' price={100} inStock={true} img='aaaa' />
    );
    expect(wrapper.exists()).toBe(true);
  });
  it('Check if components has text', () => {
    const wrapper = shallow(
      <ProductComponent name='Magnum' price={100} inStock={true} img='aaaa' />
    );
    expect(wrapper.text().includes('Magnum')).toBe(true);
    expect(wrapper.text().includes('100')).toBe(true);
    expect(
      wrapper.text().includes('Yes') || wrapper.text().includes('No')
    ).toBe(true);
  });
});
