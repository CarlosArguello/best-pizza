import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/',
  timeout: 4000,
});

request.interceptors.response.use(
  ({ data, status, statusText }) => {
    if (status === 200 && statusText === 'OK') {
      return data.response;
    }
  },
  (error) => {
    throw error;
  }
);
