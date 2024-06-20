// src/pages/Home.test.js
// src/pages/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './home.jsx';

test('renders Home component with correct text', () => {
  render(<Home />);

  // Check if the main headline is rendered
  expect(screen.getByText(/Let's Elevate Your Ride Experience With Rhyno/i)).toBeInTheDocument();
  
  // Check if the subtitle is rendered
  expect(screen.getByText(/Where Superiority Meets Style./i)).toBeInTheDocument();
  
  // Check if the pre-book button is rendered
  expect(screen.getByText(/Pre-book now/i)).toBeInTheDocument();
});

