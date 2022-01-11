import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/',
  timeout: 4000,
});
