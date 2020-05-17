export type PriceInfoType = {
  priceWithDiscount: string;
  originalPrice: string;
  discountOff: string;
  hasDiscount: boolean;
};

export const applyDiscount = (price: number, discount: number): number =>
  price - (price * discount) / 100;

export const getPriceInfo = (
  price: number,
  discount: number
): PriceInfoType => {
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
