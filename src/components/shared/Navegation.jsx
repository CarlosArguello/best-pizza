import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Button, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'utils/hooks/useAuth';

export const Navegation = () => {
  const { hasAuth, cleanAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasAuth) navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAuth]);

  return (
    <Box
      sx={{
        mb: 2,
        height: { xs: 80, lg: 60 },
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
        <Button variant="text" color="primary" onClick={cleanAuth}>
          <LockOutlinedIcon />
          <Typography color="gray" sx={{ ml: 0.5, fontWeight: 500 }}>
            Salir
          </Typography>
        </Button>
      </Container>
    </Box>
  );
};
