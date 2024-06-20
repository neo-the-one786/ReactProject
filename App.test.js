// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import App from 'react-app/src/App.js';
import Home from './home.js';
import About from './about.js';
import Products from './product.js';
 import Contact from './contact.js';
import PreBook from './prebook.js';
import Product1 from './product1.js';
import Product2 from './product2.js';
import Product3 from './product3.js';
import CompareAll from './compareAll.js';
import Rentals from './rentals.js';

test('renders Home page on default route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Let's Elevate Your Ride Experience With Rhyno/i)).toBeInTheDocument();
});

test('renders About page on /about route', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/About Us/i)).toBeInTheDocument();
});

// Add similar tests for other routes
test('renders Products page on /products route', () => {
  render(
    <MemoryRouter initialEntries={['/products']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Our Products/i)).toBeInTheDocument();
});

test('renders Contact page on /contact route', () => {
  render(
    <MemoryRouter initialEntries={['/contact']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
});

test('renders PreBook page on /prebook route', () => {
  render(
    <MemoryRouter initialEntries={['/prebook']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Pre-book now/i)).toBeInTheDocument();
});

// Add similar tests for product pages and compare all
test('renders Product1 page on /product1 route', () => {
  render(
    <MemoryRouter initialEntries={['/product1']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Rhyno SE03 Lite/i)).toBeInTheDocument();
});

test('renders Product2 page on /product2 route', () => {
  render(
    <MemoryRouter initialEntries={['/product2']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Rhyno SE03/i)).toBeInTheDocument();
});

test('renders Product3 page on /product3 route', () => {
  render(
    <MemoryRouter initialEntries={['/product3']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Rhyno SE03 Max/i)).toBeInTheDocument();
});

test('renders CompareAll page on /compare-all route', () => {
  render(
    <MemoryRouter initialEntries={['/compare-all']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Comparison Table/i)).toBeInTheDocument();
});

test('renders Rentals page on /rentals route', () => {
  render(
    <MemoryRouter initialEntries={['/rentals']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Rentals/i)).toBeInTheDocument();
});

