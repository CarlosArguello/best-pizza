import { BackgroundTextureImg, CompletePizzaImg } from 'assets/images';
import { BaseLayout } from './BaseLayout';
const { screen, render, waitFor } = require('@testing-library/react');

const setup = () => render(<BaseLayout />);

describe('<BaseLayout/>', () => {
  it('muest pizza image', async () => {
    setup();
    await waitFor(() => {
      const pizzaImg = screen.getByRole('img');
      expect(pizzaImg).toHaveAttribute('src', CompletePizzaImg);
    });
  });

  it('muest background image', async () => {
    setup();
    const bgImg = screen.getByTestId('background');
    expect(bgImg).toHaveStyle(`background-image: url(${BackgroundTextureImg})`);
  });
});
