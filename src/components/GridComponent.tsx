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

  return (
    <MainWrapper>
      <Filter type='text' placeholder='Search for a product' />
      <GridWrapper>{Products}</GridWrapper>
    </MainWrapper>
  );
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(3, 200px);
  border: solid 1px black;
`;

const MainWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Filter = styled.input`
  margin-bottom: 20px;
  border-radius: 5px;
  padding-left: 10px;
  width: 250px;
  height: 30px;
`;
