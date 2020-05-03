import React from 'react';
import { Typography } from '@material-ui/core';

type DiscountPropsType = {
  hasDiscount: boolean;
  discountOff: string;
};

export const Discount = ({ hasDiscount, discountOff }: DiscountPropsType) => {
  if (!hasDiscount) {
    return null;
  }

  return (
    <Typography display="inline" color="secondary">
      {discountOff}
    </Typography>
  );
};

export default Discount;
