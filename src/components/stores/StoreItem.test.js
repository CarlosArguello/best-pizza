import { render, screen, waitFor } from '@testing-library/react';
import { StoresImgs } from 'assets/images';
import { StoreItem } from './StoreItem';

const IMG_STORE = StoresImgs.PanosPizzaImg;
const TITLE_STORE = "Pano's Pizza";
const ADDRESS_STORE = 'calle 54';

const setup = () =>
  render(
    <StoreItem img={IMG_STORE} title={TITLE_STORE} address={ADDRESS_STORE} />
  );

describe('<StoreItem />', () => {
  it('muest exists img in store item', async () => {
    setup();
    await waitFor(() => {
      const storeItemImg = screen.getByRole('img', { name: TITLE_STORE });
      expect(storeItemImg).toHaveAttribute('src', IMG_STORE);
    });
  });

  it('muest exists title in store item', async () => {
    setup();
    await waitFor(() => {
      const storeTitle = screen.getByText(TITLE_STORE);
      expect(storeTitle).toBeInTheDocument();
    });
  });

  it('muest exists address in store item', async () => {
    setup();
    await waitFor(() => {
      const storeAddress = screen.getByText(ADDRESS_STORE);
      expect(storeAddress).toBeInTheDocument();
    });
  });
});
