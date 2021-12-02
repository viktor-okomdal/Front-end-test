import React from 'react';
import { IceCream } from '../interface/icecream.interface';

export const ProductComponent = ({ name, price, inStock }: IceCream) => {
  return (
    <div className='product'>
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{inStock}</p>
    </div>
  );
};
