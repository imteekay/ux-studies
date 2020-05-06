import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Discount } from '../index';

describe('Discount', () => {
  describe('when the product has a discount', () => {
    it('shows the discount label', () => {
      const discountOff = '20% OFF';
      render(<Discount hasDiscount discountOff={discountOff} />);
      expect(screen.getByText(discountOff)).toBeInTheDocument();
    });
  });

  describe('when the product has no discount', () => {
    it('shows nothing', () => {
      const { queryByTestId } = render(
        <Discount hasDiscount={false} discountOff="" />
      );

      expect(queryByTestId('discount-off-label')).not.toBeInTheDocument();
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Discount hasDiscount discountOff="20% OFF" />
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
