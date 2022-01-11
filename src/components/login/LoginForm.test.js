import { fireEvent, render, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm';

const setup = () => render(<LoginForm />);

describe('<LoginForm />', () => {
  it('muest exists username & password inputs', () => {
    setup();
    const usernameInput = screen.getByLabelText(/usuario/i);
    const passwordInput = screen.getByLabelText(/contraseña/i);

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('muest show required msg in username & password inputs', async () => {
    setup();
    const submitBtn = screen.getByRole('button', { name: /iniciar sesión/i });
    fireEvent.click(submitBtn);
    const itemsRequired = await screen.findAllByText(/requerido/i);
    expect(itemsRequired).toHaveLength(2);
  });

  it('muest exists forgot link', () => {
    setup();
    const forgotLink = screen.getByText(/olvidaste tu contraseña*/i);

    expect(forgotLink).toBeInTheDocument();
  });

  it('muest exists submit btn', () => {
    setup();
    const submitBtn = screen.getByRole('button', { name: /iniciar sesión/i });

    expect(submitBtn).toBeInTheDocument();
  });
});
