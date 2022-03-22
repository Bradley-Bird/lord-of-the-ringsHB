import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Welcome! Check out the links to learn all about Lord of The Rings!/i
  );
  expect(linkElement).toBeInTheDocument();
});
