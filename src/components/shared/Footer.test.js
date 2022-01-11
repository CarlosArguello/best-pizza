import { LogoDark } from 'assets/images';
import { Footer } from './Footer';
const { screen, render, waitFor } = require('@testing-library/react');

const setup = () => render(<Footer />);

describe('<Footer/>', () => {
  it('should dark pizza image', async () => {
    setup();
    await waitFor(() => {
      const pizzaImg = screen.getByRole('img', { name: /pizza dark/i });
      expect(pizzaImg).toHaveAttribute('src', LogoDark);
    });
  });
});
