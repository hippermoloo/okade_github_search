import { message, Modal } from 'antd';
import axios from 'axios';
import AppConsts from './appconst';

const qs = require('qs');

const http = axios.create({
  baseURL: AppConsts.remoteServiceBaseUrl,
  timeout: 120000,
  paramsSerializer: function(params) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});

http.interceptors.request.use(
  function(config:any) {

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    let status = Number(error.response.status);
    let message = String(error.response.data.message);

    if (status === 404 && message === 'Not Found') {
      window.location.replace("/page-not-found");
    } else if (status === 505) {
      window.location.replace("/page-not-found");
    }

    setTimeout(() => {}, 1000);

    return Promise.reject(error);
  }
);

export default http;
