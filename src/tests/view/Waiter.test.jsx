import React from 'react';
import { render, screen } from '@testing-library/react';
import Waiter from '../../view/Waiter';

describe('Waiter', () => {
  test('Should find button "DESAYUNO" in the component', () => {
    render(<Waiter />);
    expect(screen.getByText('DESAYUNO')).toBeInTheDocument();
  });

  test('Should find button "HAMBURGUESA" in the component', () => {
    render(<Waiter />);
    expect(screen.getByText('HAMBURGUESA')).toBeInTheDocument();
  });

  test('Should find button "ACOMPAÑAMIENTO" in the component', () => {
    render(<Waiter />);
    expect(screen.getByText('ACOMPAÑAMIENTO')).toBeInTheDocument();
  });

  test('Should find button "BEBIDAS" in the component', () => {
    render(<Waiter />);
    expect(screen.getByText('BEBIDAS')).toBeInTheDocument();
  });
});
