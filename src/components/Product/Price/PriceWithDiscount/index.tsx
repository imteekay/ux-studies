import React from 'react';
import { Typography } from '@material-ui/core';

import { priceWithDiscountStyle } from '../styles';

type PricePropsType = {
  price: string;
};

export const PriceWithDiscount = ({ price }: PricePropsType) => (
  <Typography display="inline" style={priceWithDiscountStyle}>
    {price}
  </Typography>
);

export default PriceWithDiscount;
