import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';
import Welcome from '../../view/Welcome';

describe('App', () => {
  test('renders App component welcome', () => {
    render(<Welcome />);

    screen.debug();
  });

  test('renders button Mesero', () => {
    const { getByText } = render(<App />);
    const buttonElement = getByText('Mesero');
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
  });

  test('renders button Jefe de Cocina', () => {
    const { getByText } = render(<App />);
    const buttonElement = getByText('Jefe de Cocina');
    expect(buttonElement).toBeInTheDocument();
  });
});

// describe('Home', () => {
//   test('renders component button HOME', async () => {
//     render(<App />);
//     const button = await screen.findByRole('button', { name: /btn btn-welcome/i });
//     fireEvent.click(button);

//     const title = await screen.findByText('ORDEN DE PEDIDO');
//     expect(title).toBeVisible();
//   });
// });
