import axios from 'axios';

let API_BASE_URL;

/**
 * Dynamically sets API_BASE_URL based on hostname.
 * Must be called before getAxiosInstance().
 */
export async function loadApiConfig() {
  const response = await fetch('/config.json');
  const config = await response.json();

  const hostname = window.location.hostname;
  if (hostname === 'localhost') {
    API_BASE_URL = config.local.API_BASE_URL;
  } else if (hostname === 'frontend3-dev.web.app') {
    API_BASE_URL = config.dev.API_BASE_URL;
  } else {
    throw new Error(`Unknown hostname: ${hostname}`);
  }
}

export function getAxiosInstance() {
  return axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
  });
}
