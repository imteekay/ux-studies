import React from 'react';
import Product from './index';

export const Skeleton = () => (
  <Product
    imageUrl=""
    thumbUrl=""
    name=""
    description=""
    price={0}
    discount={0}
    isShippingFree
    isLoading
  />
);

export default Skeleton;
