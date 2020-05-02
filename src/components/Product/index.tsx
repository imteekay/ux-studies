import React from 'react';
import Box from '@material-ui/core/Box';

import { ProductType } from 'types/Product';
import Image from '../Image';
import Tag from '../Tag';
import TitleDescription from './TitleDescription';
import Price from './Price';

type ProductPropsType = ProductType & {
  isLoading: boolean;
};

export const Product = ({
  imageUrl,
  name,
  description,
  price,
  discount,
  isShippingFree,
  isLoading,
}: ProductPropsType) => (
  <Box>
    <Image imageUrl={imageUrl} imageAlt={name} isLoading={isLoading} />
    <TitleDescription name={name} description={description} />
    <Price price={price} discount={discount} />
    <Tag label="Free Shipping" isVisible={isShippingFree} />
  </Box>
);

export default Product;
