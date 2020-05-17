import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Price } from '../index';

describe('Price', () => {
  describe('when the product has a discount', () => {
    it('shows the price', () => {
      render(<Price price={100} discount={20} isLoading={false} />);
      expect(screen.getByText('$100')).toBeInTheDocument();
      expect(screen.getByText('$80')).toBeInTheDocument();
      expect(screen.getByText('20% OFF')).toBeInTheDocument();
    });
  });

  describe('when the product has no discount', () => {
    it('shows the skeleton loader', () => {
      const { queryByTestId } = render(
        <Price price={100} discount={20} isLoading />
      );

      expect(queryByTestId('price-skeleton-loader')).toBeInTheDocument();
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Price price={100} discount={20} isLoading={false} />
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
