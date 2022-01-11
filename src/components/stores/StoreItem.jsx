import { Box, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export const StoreItem = ({ img, title, address }) => (
  <Box sx={{ display: 'inline-flex', flexDirection: 'column', width: '100%' }}>
    <LazyLoadImage src={img} alt={title} />
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
