import React from 'react';
import styled from 'styled-components';
import { ProductComponent } from './ProductComponent';
import { icecreams } from '../database/database';

export const GridComponent = () => {
  const Products = [];
  for (let i = 0; i < 9; i++) {
    Products.push(
      <ProductComponent
        name={icecreams[i].name}
        price={icecreams[i].price}
        inStock={icecreams[i].inStock}
        img={icecreams[i].img}
        key={i}
      />
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
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(3, 400px);
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
