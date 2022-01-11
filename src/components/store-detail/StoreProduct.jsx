import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

export const StoreProduct = ({ name }) => (
  <Paper
    variant="outlined"
    sx={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Box
      sx={{
        height: { xs: 80, lg: 60 },
        width: '100%',
        maxWidth: { xs: 80, md: 100 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: (theme) => theme.palette.secondary.main,
      }}
    >
      <MenuBookIcon sx={{ fontSize: '2.5rem' }} />
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        mx: 3,
        minWidth: { md: 350 },
      }}
    >
      <Typography
        component="strong"
        sx={{
          fontSize: { xs: '.75rem', lg: '.8rem' },
          fontWeight: 600,
        }}
      >
        {name}
      </Typography>
      <Typography
        component="span"
        color="green"
        sx={{
          color: 'primary.main',
          fontSize: { xs: '.85rem', lg: '1rem' },
          fontWeight: 600,
        }}
      >
        $280,000 — $310,000
      </Typography>
    </Box>
  </Paper>
);
