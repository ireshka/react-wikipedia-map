import { render, screen } from '@testing-library/react';
import App from './App';

describe('app test', () => {
  it('renders header', () => {
    expect.assertions(1);
    render(<App />);
    const titleElement = screen.getByText(/wikipedia map/i);
    expect(titleElement).toBeInTheDocument();
  });
});
