import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';

type DiscountPropsType = {
  hasDiscount: boolean;
  discountOff: string;
};

export const Discount: FunctionComponent<DiscountPropsType> = ({
  hasDiscount,
  discountOff,
}) => {
  if (!hasDiscount) {
    return null;
  }

  return (
    <Typography
      display="inline"
      color="secondary"
      data-testid="discount-off-label"
    >
      {discountOff}
    </Typography>
  );
};

export default Discount;
