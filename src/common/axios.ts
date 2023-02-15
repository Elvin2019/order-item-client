import axios from 'axios';

const getHeader = () => {
  return {
    Authorization: `Bearer `,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
};

const axiosInstance = axios.create();
axiosInstance.defaults.headers.common = getHeader();
axiosInstance.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axiosInstance.interceptors.request.use(
  function (config) {
    config.baseURL = process.env.REACT_APP_BASE_URL;
    return config;
  },
  function (error) {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response?.status !== 404 && error.response?.status !== 401) {
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
