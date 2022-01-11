import { Container, Grid, Typography, Zoom } from '@mui/material';
import { StoresImgs } from 'assets/images';
import { BaseLayout } from 'components/shared/layouts/BaseLayout';
import { useEffect, useState } from 'react';
import { useMainCtx } from 'utils/context/mainContext';
import { StoreItem } from './StoreItem';
import { StoresSearch } from './StoresSearch';

export const Stores = () => {
  const storesData = useMainCtx().stores;
  const [stores, setStores] = useState([]);
  const storeImgs = Object.values(StoresImgs);

  const onSearchStores = (foundStores) => {
    setStores(foundStores);
  };

  useEffect(() => {
    setStores(storesData);
  }, [storesData]);

  return (
    <BaseLayout navegation footer logo>
      <Container
        maxWidth="sm"
        sx={{ mx: { xs: 0, lg: 10 }, px: { xs: 5, lg: 0 } }}
      >
        <Typography sx={{ fontSize: '1.8rem' }} variant="h1">
          Tiendas
        </Typography>
        <Typography
          sx={{ fontSize: '1rem', fontWeight: 500, my: 1 }}
          component="p"
          color="gray"
        >
          Escoge tu pizzería favorita
        </Typography>

        <StoresSearch onChange={onSearchStores} />

        <Zoom in={true} style={{ transitionDelay: '600ms' }}>
          <Grid container spacing={4} sx={{ mt: 2, mb: 4 }}>
            {stores.map(({ id, name, address }, index) => (
              <Grid item xs={6} lg={4} data-testid="store-item" key={index}>
                <StoreItem
                  id={id}
                  img={storeImgs[index]}
                  title={name}
                  address={address}
                />
              </Grid>
            ))}
          </Grid>
        </Zoom>
      </Container>
    </BaseLayout>
  );
};
