import { Button, Link, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

export const LoginForm = () => {
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
      console.log(data);
    },
  });

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Box marginBottom={2}>
        <TextField
          label="Usuario"
          name="password"
          onChange={handleChange}
          helperText={errors.username}
          error={errors.username && touched.username}
        />
      </Box>
      <Box marginBottom={2}>
        <TextField
          label="Contraseña"
          name="password"
          onChange={handleChange}
          helperText={errors.password}
          error={errors.password && touched.password}
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
