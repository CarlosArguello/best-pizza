import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { BaseLayout } from 'components/shared/layouts/BaseLayout';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMainCtx } from 'utils/context/mainContext';
import { StoreProduct } from './StoreProduct';

export const StoreDetail = () => {
  const { id } = useParams();
  const { stores } = useMainCtx();
  const [store, setStore] = useState({});

  useEffect(() => {
    if (stores?.length) {
      const _store = stores.find((_store) => _store.id === Number(id));
      setStore(_store);
    }
  }, [stores, id]);

  return (
    <BaseLayout navegation footer>
      <Container
        maxWidth="sm"
        sx={{ mx: { xs: 0, lg: 10 }, px: { xs: 2, lg: 0 } }}
      >
        <Typography
          sx={{ fontSize: { xs: '1.4rem', lg: '1.8rem' } }}
          variant="h1"
        >
          {store?.name}
        </Typography>

        <Typography
          sx={{
            my: 0.5,
            fontSize: { xs: '.8rem', lg: '1rem' },
            fontWeight: 500,
          }}
          component="p"
          color="gray"
        >
          {store?.address}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '1rem', lg: '1.2rem', fontWeight: 400 },
          }}
          variant="h1"
        >
          {store?.description}
        </Typography>

        <Box sx={{ my: 4 }}>
          {store?.products?.map(({ name }, index) => (
            <Box sx={{ mb: 1 }} data-testid="store-product" key={index}>
              <StoreProduct name={name} />
            </Box>
          ))}
        </Box>
      </Container>
    </BaseLayout>
  );
};
