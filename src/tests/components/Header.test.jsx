import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header', () => {
  const history = jest.fn();
  test('renders Header component ', () => {
    render(<Header name="ORDEN DE PEDIDO" history={history} />);
    screen.debug();
  });
  test('renders Header component ', () => {
    render(<Header name="JEFE DE COCINA" history={history} />);
    screen.debug();
  });
});
