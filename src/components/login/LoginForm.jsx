import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { Button, InputAdornment, Link, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMainCtx } from 'utils/context/mainContext';
import { useAuth } from 'utils/hooks/useAuth';
import * as Yup from 'yup';

export const LoginForm = () => {
  const { users } = useMainCtx();
  const { enterAuth } = useAuth();
  const navigate = useNavigate();

  const SignInSchema = Yup.object().shape({
    username: Yup.string().required('Requerido'),
    password: Yup.string().required('Requerido'),
  });

  const { handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: (data) => {
      const findUser = users.find(
        ({ email, password }) =>
          email === data.username && password === data.password
      );
      if (findUser?.id) {
        enterAuth();
        navigate('/stores');
      }
    },
  });

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Box marginBottom={2}>
        <TextField
          label="Usuario"
          name="username"
          onChange={handleChange}
          helperText={errors.username}
          error={errors.username && touched.username}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box marginBottom={2}>
        <TextField
          type="password"
          label="Contraseña"
          name="password"
          onChange={handleChange}
          helperText={errors.password}
          error={errors.password && touched.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Link
        href="#"
        color="primary"
        sx={{ my: 4, display: 'block', textAlign: 'center' }}
        onClick={(e) => e.preventDefault()}
      >
        ¿Olvidaste tu contraseña?
      </Link>
      <Button
        size="large"
        variant="contained"
        color="secondary"
        type="submit"
        fullWidth
      >
        Iniciar sesión
      </Button>
    </form>
  );
};
