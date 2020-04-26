import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '../index';

describe('App', () => {
  it('renders the home title', () => {
    render(<App />);
    expect(screen.getByText("It's Home")).toBeInTheDocument();
  });
});
