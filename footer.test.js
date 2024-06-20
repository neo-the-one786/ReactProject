// src/components/Footer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer.jsx';

test('renders Footer component', () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

  // Check if links are rendered
  expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
  expect(screen.getByText(/Refund Policy/i)).toBeInTheDocument();
  expect(screen.getByText(/Website Policy/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  expect(screen.getByText(/Products/i)).toBeInTheDocument();
  expect(screen.getByText(/Career/i)).toBeInTheDocument();
  expect(screen.getByText(/Rentals/i)).toBeInTheDocument();
});
