import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { PriceWithDiscount } from '../index';

describe('PriceWithDiscount', () => {
  describe('when the product has a discount', () => {
    it('shows the price', () => {
      const price = '$200';
      render(<PriceWithDiscount hasDiscount price={price} />);
      expect(screen.getByText(price)).toBeInTheDocument();
    });
  });

  describe('when the product has no discount', () => {
    it('shows nothing', () => {
      const { queryByTestId } = render(
        <PriceWithDiscount hasDiscount={false} price="" />
      );

      expect(queryByTestId('discount-off-label')).not.toBeInTheDocument();
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <PriceWithDiscount hasDiscount price="$200" />
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
