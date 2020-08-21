import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';

import { ProductType } from 'types/Product';
import Image from '../Image';
import Tag from '../Tag';
import TitleDescription from './TitleDescription';
import Price from './Price';

export type ProductPropsType = ProductType & {
  isLoading: boolean;
};

export const Product: FunctionComponent<ProductPropsType> = ({
  imageUrl,
  thumbUrl,
  name,
  description,
  price,
  discount,
  isShippingFree,
  isLoading,
}) => (
  <Box mb={1}>
    <Image
      imageUrl={imageUrl}
      thumbUrl={thumbUrl}
      imageAlt={name}
      isLoading={isLoading}
    />
    <TitleDescription
      name={name}
      description={description}
      isLoading={isLoading}
    />
    <Price price={price} discount={discount} isLoading={isLoading} />
    <Tag
      label="Free Shipping"
      isVisible={isShippingFree}
      isLoading={isLoading}
    />
  </Box>
);

export default Product;
