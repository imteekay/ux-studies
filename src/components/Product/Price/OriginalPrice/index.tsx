import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';

import { originalPriceStyle } from '../styles';

type OriginalPricePropsType = {
  price: string;
};

export const OriginalPrice: FunctionComponent<OriginalPricePropsType> = ({
  price,
}) => (
  <Typography display="inline" style={originalPriceStyle} color="textSecondary">
    {price}
  </Typography>
);

export default OriginalPrice;
