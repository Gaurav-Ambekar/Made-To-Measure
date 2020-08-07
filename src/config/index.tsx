import * as dotenv from 'dotenv';
dotenv.config();
export const BASE_URL = process.env.PUBLIC_URL;
const URLS = {
  localhost: 'http://localhost/backend/api/',
  server: 'http://server6.interlinkconsultant.com/maverix/',
};
export const BACKEND_URL =
  process.env.NODE_ENV !== 'production' ? URLS.localhost : URLS.server;
export const API_ACCESS_KEY = 'ZkC6BDUzxz';
