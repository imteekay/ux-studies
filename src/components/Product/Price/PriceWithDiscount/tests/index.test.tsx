import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { PriceWithDiscount } from '../index';

describe('PriceWithDiscount', () => {
  it('shows the price', () => {
    const price = '$200';
    render(<PriceWithDiscount price={price} />);
    expect(screen.getByText(price)).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<PriceWithDiscount price="$200" />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
