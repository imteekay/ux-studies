import React from 'react';
import { Typography } from '@material-ui/core';

import { originalPriceStyle } from '../styles';

type OriginalPricePropsType = {
  price: string;
};

export const OriginalPrice = ({ price }: OriginalPricePropsType) => {
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
