import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { useMainCtx } from 'utils/context/mainContext';

export const StoresSearch = ({ onChange }) => {
  const { stores } = useMainCtx();

  const searchStores = (val = '') => {
    const foundStores = stores.filter(
      (store) => store?.name?.toLowerCase().search(val?.toLowerCase()) !== -1
    );
    onChange(foundStores);
  };

  return (
    <TextField
      onChange={({ target }) => searchStores(target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
