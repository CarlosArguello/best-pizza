import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

export const Navegation = () => (
  <Box
    sx={{
      mb: 2,
      height: 60,
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Button variant="text" color="primary">
        <LockOutlinedIcon />
        <Typography color="gray" sx={{ ml: 0.5, fontWeight: 500 }}>
          Salir
        </Typography>
      </Button>
    </Container>
  </Box>
);
