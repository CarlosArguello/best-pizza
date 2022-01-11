const { render, screen } = require('@testing-library/react');
const { Stores } = require('./Stores');

const storesData = [
  {
    id: 1,
    name: 'Pizzeria Capitan America',
    address: 'Calle 1 #2-3',
    description: 'Esta pizzeria se especializa en ingredientes salados',
  },
  {
    id: 2,
    name: 'Pizzeria Iron Man',
    address: 'Calle 2 #3-4',
    description: 'Esta pizzeria se especializa en ingredientes picantes',
  },
];

jest.mock('utils/context/mainContext', () => ({
  useMainCtx: () => ({ stores: storesData }),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: storesData[0].id }),
  useNavigate: () => jest.fn(),
}));

const setup = () => render(<Stores />);

describe('<Stores />', () => {
  it('exists title', () => {
    setup();
    const title = screen.getByRole('heading', {
      name: /tiendas/i,
    });
    expect(title).toBeInTheDocument();
  });

  it('exists description', () => {
    setup();
    const description = screen.getByText(/escoge tu pizzería favorita/i);
    expect(description).toBeInTheDocument();
  });

  it('should the same number of items as the array mock', () => {
    setup();
    const storeItems = screen.getAllByTestId('store-item');
    expect(storeItems).toHaveLength(storesData.length);
  });
});
