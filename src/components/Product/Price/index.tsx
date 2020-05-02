import React, { Fragment } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Typography } from '@material-ui/core';

import { ProductType } from 'types/Product';

type PriceType = Pick<ProductType, 'price' | 'discount'>;
type PricePropsType = PriceType & {
  isLoading: boolean;
};

const applyDiscount = (price: number, discount: number): number =>
  (price * discount) / 100;

const getPriceInfo = (price: number, discount: number) => {
  const hasDiscount: boolean = Boolean(discount);
  const priceWithDiscount: string = hasDiscount
    ? `$${applyDiscount(price, discount)}`
    : `$${price}`;

  const originalPrice: string = `$${price}`;
  const discountOff: string = hasDiscount ? `${discount}% OFF` : '';

  return {
    priceWithDiscount,
    originalPrice,
    discountOff,
    hasDiscount,
  };
};

const originalPriceStyle = {
  marginRight: '8px',
};

const priceWithDiscountStyle = {
  marginRight: '8px',
};

export const Price = ({ price, discount, isLoading }: PricePropsType) => {
  if (isLoading) {
    return <Skeleton width="80%" height="18px" />;
  }

  const {
    priceWithDiscount,
    originalPrice,
    discountOff,
    hasDiscount,
  } = getPriceInfo(price, discount);

  return (
    <Fragment>
      <Typography display="inline" style={priceWithDiscountStyle}>
        {priceWithDiscount}
      </Typography>

      {hasDiscount && (
        <Typography
          display="inline"
          style={originalPriceStyle}
          color="textSecondary"
        >
          {originalPrice}
        </Typography>
      )}

      {hasDiscount && (
        <Typography display="inline" color="secondary">
          {discountOff}
        </Typography>
      )}
    </Fragment>
  );
};

export default Price;
