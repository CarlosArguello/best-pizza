import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Container, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LogoDark } from 'assets/images';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const INSTAGRAM_LINK = 'https://www.instagram.com/bestpizzaarmenia/?hl=es';
const FACEBOOK_LINK =
  'https://www.facebook.com/pages/category/Restaurant/Best-pizza-104491097952935/';

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
      <Box sx={{ display: 'flex' }}>
        <Box href={FACEBOOK_LINK} component={Link}>
          <Typography sx={{ color: (theme) => theme.palette.text.secondary }}>
            <FacebookIcon sx={{ fontSize: '2rem', mr: 1 }} />
          </Typography>
        </Box>
        <Box href={INSTAGRAM_LINK} component={Link}>
          <Typography sx={{ color: (theme) => theme.palette.text.secondary }}>
            <InstagramIcon sx={{ fontSize: '2rem' }} />
          </Typography>
        </Box>
      </Box>

      <Box href="/stores" component={Link}>
        <LazyLoadImage src={LogoDark} alt="pizza dark" width={55} />
      </Box>
    </Container>
  </Box>
);
