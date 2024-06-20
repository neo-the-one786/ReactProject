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
import App from 'react-app/src/App.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Products from './product.jsx';
 import Contact from './contact.jsx';
import Prebook from './prebook.jsx';
import Product1 from './product1.jsx';
import Product2 from './product2.jsx';
import Product3 from './product3.jsx';
import CompareAll from './compareAll.jsx';
import Rentals from './rentals.jsx';

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

test('renders Prebook page on /prebook route', () => {
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

