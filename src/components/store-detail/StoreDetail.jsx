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
      <Container maxWidth="sm" sx={{ height: 'inherit', mx: 10 }}>
        <Typography sx={{ mb: 1, fontSize: '1.8rem' }} variant="h1">
          {store?.name}
        </Typography>
        <Typography
          sx={{ fontSize: '1rem', fontWeight: 500 }}
          component="p"
          color="gray"
        >
          Productos disponibles de la tienda
        </Typography>

        <Box sx={{ mt: 4 }}>
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
