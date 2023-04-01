import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/App';

describe('App component', () => {
  test('renders MainScreen component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Welcome to the main screen/i)).toBeInTheDocument();
  });

  test('renders Error component for unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Oops! Something went wrong/i)).toBeInTheDocument();
  });
});
