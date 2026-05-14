import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PeachPass header', () => {
  render(<App />);
  const linkElement = screen.getByText(/PeachPass/i);
  expect(linkElement).toBeInTheDocument();
});
