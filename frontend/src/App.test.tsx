import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The main app', () => {
  it('should render the Orders link', () => {
    render(<App />);
    expect(screen.getByTestId('Orders')).toBeInTheDocument();
  });

  it('should render the Payments link', () => {
    render(<App />);
    expect(screen.getByTestId('Payments')).toBeInTheDocument();
  });

  it('should render the Home link', () => {
    render(<App />);
    expect(screen.getByRole('heading', {level:2})).toBeInTheDocument();
  });
});

//test test test