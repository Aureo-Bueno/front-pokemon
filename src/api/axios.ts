/**
 * @file src/api/axios.ts
 * HTTP client configuration for communicating with PokeAPI.
 */

import axios, { type AxiosInstance } from "axios";

/**
 * Shared Axios client used by all service modules.
 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Request interceptor used to keep a single extension point for outgoing calls.
 */
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor used to centralize API error logging.
 */
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

/**
 * Default HTTP client configured for PokeAPI.
 */
export default axiosInstance;
