import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { OriginalPrice } from '../index';

describe('OriginalPrice', () => {
  describe('when the product has a discount', () => {
    it('shows the price', () => {
      const price = '$200';
      render(<OriginalPrice price={price} />);
      expect(screen.getByText(price)).toBeInTheDocument();
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<OriginalPrice price="$200" />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
