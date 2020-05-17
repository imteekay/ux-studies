import { applyDiscount, getPriceInfo } from '../getPriceInfo';

describe('applyDiscount', () => {
  it('applies 20% discount in the price', () => {
    expect(applyDiscount(100, 20)).toEqual(80);
  });

  it('applies 95% discount in the price', () => {
    expect(applyDiscount(100, 95)).toEqual(5);
  });
});

describe('getPriceInfo', () => {
  describe('with discount', () => {
    it('returns the correct price info', () => {
      expect(getPriceInfo(100, 20)).toMatchObject({
        priceWithDiscount: '$80',
        originalPrice: '$100',
        discountOff: '20% OFF',
        hasDiscount: true,
      });
    });
  });

  describe('without discount', () => {
    it('returns the correct price info', () => {
      expect(getPriceInfo(100, 0)).toMatchObject({
        priceWithDiscount: '$100',
        originalPrice: '$100',
        discountOff: '',
        hasDiscount: false,
      });
    });
  });
});
