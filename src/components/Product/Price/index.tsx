import React, { Fragment } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

import { ProductType } from 'types/Product';
import { PriceWithDiscount } from './PriceWithDiscount';
import { OriginalPrice } from './OriginalPrice';
import { Discount } from './Discount';

type PriceType = Pick<ProductType, 'price' | 'discount'>;
type PricePropsType = PriceType & {
  isLoading: boolean;
};

type PriceInfoType = {
  priceWithDiscount: string;
  originalPrice: string;
  discountOff: string;
  hasDiscount: boolean;
};

const applyDiscount = (price: number, discount: number): number =>
  (price * discount) / 100;

const getPriceInfo = (price: number, discount: number): PriceInfoType => {
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

export const Price = ({ price, discount, isLoading }: PricePropsType) => {
  if (isLoading) {
    return <Skeleton width="80%" height="18px" />;
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
