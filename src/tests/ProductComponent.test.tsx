import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ProductComponent } from '../components/ProductComponent';
import { icecreams } from '../database/database';

Enzyme.configure({ adapter: new Adapter() });

describe('Test for text: <ProductComponent/>', () => {
  it('Check if components has text', () => {
    const wrapper = shallow(
      <ProductComponent name='Magnum' price={100} inStock={true} />
    );
    expect(wrapper.text().includes('Magnum')).toBe(true);
  });
  // it('', () => {});
});
