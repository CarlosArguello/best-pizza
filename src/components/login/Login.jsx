import { Box, Typography } from '@mui/material';
import { LogoDarkText } from 'assets/images';
import { BaseLayout } from 'components/shared/layouts/BaseLayout';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LoginForm } from './LoginForm';

export const Login = () => (
  <BaseLayout>
    <Box
      sx={{
        width: 450,
        maxWidth: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',
        height: '100%',
      }}
    >
      <Box
        src={LogoDarkText}
        alt="best pizza dark"
        component={LazyLoadImage}
        sx={{ mx: 'auto', width: { xs: 130, lg: 230 }, mb: 5 }}
      ></Box>

      <Typography
        sx={{
          textAlign: 'center',
          mb: 4,
        }}
        variant="h1"
      >
        Bienvenido
        <Typography
          component="span"
          sx={{
            fontSize: { xs: '1rem', lg: '1.3rem' },
            display: 'block',
            mt: 1.5,
          }}
          color="gray"
        >
          A las mejores pizzas del país
        </Typography>
      </Typography>
      <LoginForm />
    </Box>
  </BaseLayout>
);
