import React from 'react';
import styled from 'styled-components';
import { IceCream } from '../interface/icecream.interface';

export const ProductComponent = ({ name, price, inStock, img }: IceCream) => {
  return (
    <ProductWrapper>
      <h1>{name}</h1>
      <p>{price}:-</p>
      <ImageWrapper src={img} />
      <p>{`Is in stock: ${inStock ? 'Yes' : 'No'}`}</p>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  width: 300px;
  height: 300px;
`

const ImageWrapper = styled.img`
  src: url(${(props) => props.src});
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
