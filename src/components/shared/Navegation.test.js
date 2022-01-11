import { render, screen } from '@testing-library/react';
import { Navegation } from './Navegation';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

const setup = () => render(<Navegation />);

describe('<Navegation />', () => {
  it('should exists sign out', async () => {
    setup();
    const signOutText = screen.getByText(/salir/i);
    expect(signOutText).toBeInTheDocument();
  });
});
