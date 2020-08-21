import React, { FunctionComponent } from 'react';
import Product from './index';

export const Skeleton: FunctionComponent = () => (
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
