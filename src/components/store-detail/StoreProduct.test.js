const { render, screen } = require('@testing-library/react');
const { StoreProduct } = require('./StoreProduct');

const NAME_PRODUCT = 'Pizza de Pollo';
const DEFAULT_PRICE = '$280,000 — $310,000';

const setup = () => render(<StoreProduct name={NAME_PRODUCT} />);

describe('<StoreProduct />', () => {
  it('should exists product name', () => {
    setup();
    const title = screen.getByText(NAME_PRODUCT);
    expect(title).toBeInTheDocument();
  });

  it('should exists default price text', () => {
    setup();
    const price = screen.getByText(DEFAULT_PRICE);
    expect(price).toBeInTheDocument();
  });
});
