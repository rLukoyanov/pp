import { render, screen } from '@testing-library/react';
import { Header } from './Component';

test('renders learn react link', () => {
  render(<Header />);
  const headerElement = screen.getByPlaceholderText(/Search/i);

});
