import { Box, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

export const StoreItem = ({ id, img, title, address }) => {
  const navigate = useNavigate();
  const goToStoreDetail = () => navigate(`/${id}`);

  return (
    <Box
      sx={{ display: 'inline-flex', flexDirection: 'column', width: '100%' }}
    >
      <Box sx={{ cursor: 'pointer' }}>
        <LazyLoadImage
          src={img}
          alt={title}
          onClick={goToStoreDetail}
          width="100%"
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Tooltip title={title}>
          <Typography
            noWrap
            component="h3"
            variant="h3"
            sx={{ fontSize: '1.1rem', fontWeight: 500 }}
          >
            {title}
          </Typography>
        </Tooltip>
        <Typography component="small" color="gray" sx={{ fontSize: '.7rem' }}>
          {address}
        </Typography>
      </Box>
    </Box>
  );
};
