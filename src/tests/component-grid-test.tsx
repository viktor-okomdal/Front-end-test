import {icecream} from "../database/database"
import {
 
} from '@testing-library/dom'
import '@testing-library/jest-dom'
import { ProductsCard } from "../components/gridComponent"
import { shallow } from 'enzyme';
import App from '../App'

describe('<product-wrapper>', ()=> {
  it('should render grid-component <ProductCard/>', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find(ProductsCard).length).toEqual(1)
  })
})