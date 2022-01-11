import { Box } from '@mui/material';
import { BackgroundTextureImg, CompletePizzaImg } from 'assets/images';
import { Navegation } from 'components/shared/Navegation';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Footer } from '../Footer';
import { BestPizzaTheme } from '../theme/BestPizzaTheme';

export const BaseLayout = ({
  children,
  navegation = false,
  footer = false,
}) => (
  <Box component="main" sx={{ display: 'flex', minHeight: '100vh' }}>
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
    <Box
      component="main"
      sx={{
        width: '55%',
        height: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <BestPizzaTheme>
        <Box sx={{ height: navegation && footer ? '' : '100%' }}>
          {navegation && <Navegation />}
          {children}
        </Box>
        {footer && <Footer />}
      </BestPizzaTheme>
    </Box>
  </Box>
);
