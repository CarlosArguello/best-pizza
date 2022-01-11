const { screen, render, waitFor } = require('@testing-library/react');
const { LogoDarkText } = require('assets/images');
const { Login } = require('./Login');

const setup = () => render(<Login />);

describe('<Login/>', () => {
  it('muest exists title', () => {
    setup();
    const title = screen.getByRole('heading', {
      name: /Bienvenido a las mejores pizzas del país/i,
    });
    expect(title).toBeInTheDocument();
  });

  it('muest exists icon img', async () => {
    setup();
    await waitFor(() => {
      const pizzaImg = screen.getByRole('img', { name: /best pizza dark/i });
      expect(pizzaImg).toHaveAttribute('src', LogoDarkText);
    });
  });
});
