import { Box } from '@mui/material';
import { BackgroundTextureImg, CompletePizzaImg } from 'assets/images';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BestPizzaTheme } from '../theme/BestPizzaTheme';

export const BaseLayout = ({ children }) => (
  <Box component="main" sx={{ display: 'flex', height: '100vh' }}>
    <Box
      data-testid="background"
      component="aside"
      sx={{
        backgroundImage: `url(${BackgroundTextureImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
      }}
    >
      <LazyLoadImage src={CompletePizzaImg} alt="pizza completa" width="600" />
    </Box>
    <Box sx={{ width: '55%', height: 'inherit' }}>
      <BestPizzaTheme>{children}</BestPizzaTheme>
    </Box>
  </Box>
);
