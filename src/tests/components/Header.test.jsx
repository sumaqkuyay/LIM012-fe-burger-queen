import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header', () => {
  test('Render ', () => {
    render(<Header name="ORDEN DE PEDIDO" />);
    screen.debug();
  });
  test('Render ', () => {
    render(<Header name="JEFE DE COCINA" />);
    screen.debug();
  });
});
