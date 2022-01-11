const { render, screen } = require('@testing-library/react');
const { Stores } = require('./Stores');

const setup = () => render(<Stores />);

describe('<Stores />', () => {
  it('muest exists title', () => {
    setup();
    const title = screen.getByRole('heading', {
      name: /tiendas/i,
    });
    expect(title).toBeInTheDocument();
  });

  it('muest exists description', () => {
    setup();
    const description = screen.getByText(/escoge tu pizzería favorita/i);
    expect(description).toBeInTheDocument();
  });
});
