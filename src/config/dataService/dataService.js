/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { message } from 'antd';
import { getItem, clearAll } from '../../utility/localStorageControl';

const hostname = () => {
  let hostUrl = '';
  switch (window.location.hostname) {
    case 'localdhost': // dev
      hostUrl = 'http://localhost:4000/api/v1';
      // hostUrl = 'https://api-ppp.orgease.in/api/v1';
      break;
    default:
      hostUrl = 'https://api-ppp.orgease.in/api/v1';
      break;
  }
  return hostUrl;
};

const authHeader = () => ({
  Authorization: `${getItem('access_token')}`,
});

const client = axios.create({
  baseURL: hostname(),
  headers: {
    Authorization: `${getItem('access_token')}`,
    'Content-Type': 'application/json',
  },
});

const addQueryParamsToUrl = (url, pathParams) => {
  let urlPath = `${url}?`;
  if (pathParams) {
    Object.entries(pathParams).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') urlPath = urlPath.concat(`${key}=${value}&`);
    });
  }
  return urlPath;
};

class DataService {
  static get(path = '') {
    return client({
      method: 'GET',
      url: path,
      headers: { ...authHeader() },
    });
  }

  static post(path = '', data = {}, optionalHeader = {}) {
    return client({
      method: 'POST',
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
    });
  }

  static patch(path = '', data = {}) {
    return client({
      method: 'PATCH',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }

  static put(path = '', data = {}, optionalHeader = {}) {
    return client({
      method: 'PUT',
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
    });
  }

  static delete(path = '', data = {}) {
    return client({
      method: 'DELETE',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }
}

/**
 * axios interceptors runs before and after a request, letting the developer modify req,req more
 * For more details on axios interceptor see https://github.com/axios/axios#interceptors
 */
client.interceptors.request.use((config) => {
  // do something before executing the request
  // For example tag along the bearer access token to request header or set a cookie
  const requestConfig = config;
  const { headers } = config;
  requestConfig.headers = { ...headers, Authorization: `Bearer ${getItem('access_token')}` };

  return requestConfig;
});

client.interceptors.response.use(
  (response) => response,

  (error) => {
    /**
     * Do something in case the response returns an error code [3**, 4**, 5**] etc
     * For example, on token expiration retrieve a new access token, retry a failed request etc
     */
    const { response } = error;
    if (response.status === 400) {
      message.error(response.data.message);
      return;
    }
    const originalRequest = error.config;
    if (response) {
      if (response.status === 401) {
        // if the error is 401 and hasn't already been retried
        if (!originalRequest._retry) {
          originalRequest._retry = true; // now it can be retried
          const refreshToken = getItem('refresh_token');
          return client
            .post('/auth/refresh-token', { refreshToken })
            .then((res) => {
              if (res.status === 200) {
                // save the new tokens
                // update the header with the new token
                client.defaults.headers.common.Authorization = `Bearer ${res.data.data.token}`;
                // retry the request that errored out
                return client(originalRequest);
              }
            })
            .catch((err) => {
              console.log('error', err);
              console.log('asdasdads');
              clearAll();
              window.location.href = `${window.location.hostname}/login`;
              // window.location.reload();
            });
        }
      }
    }
    return Promise.reject(error.response.data.error);
  },
);
export { DataService, addQueryParamsToUrl };
