const { render, screen } = require('@testing-library/react');
const { StoreDetail } = require('./StoreDetail');

const storesData = [
  {
    id: 1,
    name: 'Pizzeria Capitan America',
    address: 'Calle 1 #2-3',
    description: 'Esta pizzeria se especializa en ingredientes salados',
    products: [
      {
        id: 1,
        name: 'Pizza de Pollo',
      },
      {
        id: 2,
        name: 'Piza Pollo y Champiñones',
      },
      {
        id: 3,
        name: 'Pizza Vegetales',
      },
      {
        id: 4,
        name: 'Pizza Vegetales y Atun ',
      },
      {
        id: 5,
        name: 'Pizza 3 Quesos con Champiñones',
      },
      {
        id: 6,
        name: 'Pizza Jamon y Queso',
      },
    ],
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

const setup = () => render(<StoreDetail />);

describe('<StoreDetail />', () => {
  it('should exists title', async () => {
    setup();
    const title = await screen.findByRole('heading', {
      name: storesData[0].name,
    });
    expect(title).toBeInTheDocument();
  });

  it('should exists address', () => {
    setup();
    const title = screen.getByText(storesData[0].address);
    expect(title).toBeInTheDocument();
  });

  it('should exists description', () => {
    setup();
    const title = screen.getByText(storesData[0].description);
    expect(title).toBeInTheDocument();
  });

  it('should the same number of products as the array products mock', () => {
    setup();
    const storeItems = screen.getAllByTestId('store-product');
    expect(storeItems).toHaveLength(storesData[0].products.length);
  });
});
