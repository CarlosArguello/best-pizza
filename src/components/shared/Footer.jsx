import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LogoDark } from 'assets/images';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Footer = () => (
  <Box
    component="footer"
    sx={{
      height: '80px',
      backgroundColor: (theme) => theme.palette.primary?.main,
    }}
  >
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 'inherit',
      }}
    >
      <Typography sx={{ color: (theme) => theme.palette.text.secondary }}>
        <FacebookIcon sx={{ fontSize: '2rem', mr: 1 }} />
        <InstagramIcon sx={{ fontSize: '2rem' }} />
      </Typography>
      <LazyLoadImage src={LogoDark} alt="pizza dark" width={55} />
    </Container>
  </Box>
);
