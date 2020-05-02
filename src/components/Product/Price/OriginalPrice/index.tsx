import React from 'react';
import { Typography } from '@material-ui/core';

import { originalPriceStyle } from '../styles';

type OriginalPricePropsType = {
  hasDiscount: boolean;
  price: string;
};

export const OriginalPrice = ({
  hasDiscount,
  price,
}: OriginalPricePropsType) => {
  if (!hasDiscount) {
    return null;
  }

  return (
    <Typography
      display="inline"
      style={originalPriceStyle}
      color="textSecondary"
    >
      {price}
    </Typography>
  );
};

export default OriginalPrice;
