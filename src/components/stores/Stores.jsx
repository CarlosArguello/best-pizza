import { Container, Grid, Typography, Zoom } from '@mui/material';
import { StoresImgs } from 'assets/images';
import { BaseLayout } from 'components/shared/layouts/BaseLayout';
import { useMainCtx } from 'utils/context/mainContext';
import { StoreItem } from './StoreItem';

export const Stores = () => {
  const { stores } = useMainCtx();
  const storeImgs = Object.values(StoresImgs);

  return (
    <BaseLayout navegation>
      <Container maxWidth="sm" sx={{ height: 'inherit', mx: 10 }}>
        <Typography sx={{ mb: 1, fontSize: '1.8rem' }} variant="h1">
          Tiendas
        </Typography>
        <Typography
          sx={{ fontSize: '1rem', fontWeight: 500 }}
          component="p"
          color="gray"
        >
          Escoge tu pizzería favorita
        </Typography>

        <Zoom in={true} style={{ transitionDelay: '700ms' }}>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {stores.map(({ id, name, address }, index) => (
              <Grid item xs={4} data-testid="store-item" key={index}>
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
