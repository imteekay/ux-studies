import React from 'react';
import Box from '@material-ui/core/Box';

import { ProductType } from 'types/Product';
import Image from 'components/Image';
import Tag from 'components/Tag';
import TitleDescription from './TitleDescription';
import Price from './Price';

export const Product = ({
  imageUrl,
  name,
  description,
  price,
  discount,
  isShippingFree,
}: ProductType) => {
  return (
    <Box>
      <Image imageUrl={imageUrl} imageAlt={name} />
      <TitleDescription name={name} description={description} />
      <Price price={price} discount={discount} />
      <Tag label="Free Shipping" isVisible={isShippingFree} />
    </Box>
  );
};

export default Product;
