import { Box, Link } from '@mui/material';
import { BackgroundTextureImg, CompletePizzaImg, Logo } from 'assets/images';
import { Navegation } from 'components/shared/Navegation';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Footer } from '../Footer';
import { BestPizzaTheme } from '../theme/BestPizzaTheme';

export const BaseLayout = ({
  children,
  logo = false,
  navegation = false,
  footer = false,
}) => (
  <Box component="main" sx={{ display: 'flex', minHeight: '100vh' }}>
    <Box
      data-testid="background"
      component="aside"
      sx={{
        position: 'relative',
        backgroundImage: `url(${BackgroundTextureImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        display: { xs: 'none', lg: 'flex' },
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
      }}
    >
      {logo && (
        <Box
          href="/stores"
          component={Link}
          sx={{ position: 'absolute', left: 100, top: 40 }}
        >
          <LazyLoadImage src={Logo} alt="logo pizza" width="120" />
        </Box>
      )}
      <LazyLoadImage src={CompletePizzaImg} alt="pizza completa" width="600" />
    </Box>
    <Box
      component="main"
      sx={{
        width: { xs: '100%', lg: '55%' },
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
