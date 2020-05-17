import React, { Fragment } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

import { ProductType } from 'types/Product';
import { PriceWithDiscount } from './PriceWithDiscount';
import { OriginalPrice } from './OriginalPrice';
import { Discount } from './Discount';
import { getPriceInfo, PriceInfoType } from './getPriceInfo';

type PriceType = Pick<ProductType, 'price' | 'discount'>;
type PricePropsType = PriceType & {
  isLoading: boolean;
};

export const Price = ({ price, discount, isLoading }: PricePropsType) => {
  if (isLoading) {
    return (
      <Skeleton width="80%" height="18px" data-testid="price-skeleton-loader" />
    );
  }

  const {
    priceWithDiscount,
    originalPrice,
    discountOff,
    hasDiscount,
  }: PriceInfoType = getPriceInfo(price, discount);

  return (
    <Fragment>
      <PriceWithDiscount price={priceWithDiscount} />
      <OriginalPrice hasDiscount={hasDiscount} price={originalPrice} />
      <Discount hasDiscount={hasDiscount} discountOff={discountOff} />
    </Fragment>
  );
};

export default Price;
