import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';

import { priceWithDiscountStyle } from '../styles';

type PricePropsType = {
  hasDiscount: boolean;
  price: string;
};

export const PriceWithDiscount: FunctionComponent<PricePropsType> = ({
  price,
  hasDiscount,
}) => {
  if (!hasDiscount) {
    return null;
  }

  return (
    <Typography display="inline" style={priceWithDiscountStyle}>
      {price}
    </Typography>
  );
};

export default PriceWithDiscount;
