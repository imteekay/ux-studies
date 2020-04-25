import React from 'react';
import { render } from '@testing-library/react';
import { Thing, sum } from '../index';

describe('Thing', () => {
  it('renders a text', () => {
    const { getByText } = render(<Thing />);

    expect(getByText("I'm TK")).toBeInTheDocument();
  });
});

describe('sum', () => {
  it('returns the sum of two numbers', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
