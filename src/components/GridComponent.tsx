import React from 'react';
import styled from 'styled-components';
import { ProductComponent } from './ProductComponent';

export const GridComponent = () => {
  const Products = [];
  for (let i = 0; i < 9; i++) {
    Products.push(
      <ProductComponent name={i.toString()} price={i} inStock={true} key={i} />
    );
  }

  return <GridWrapper>{Products}</GridWrapper>;
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(3, 200px);
  border: solid 1px black;
`;
