import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '../app';

describe('App', () => {
  it('renders the home title', () => {
    render(<App />);
    expect(screen.getByText("It's Home")).toBeInTheDocument();
  });
});
