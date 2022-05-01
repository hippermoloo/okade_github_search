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


    config.headers.common['Authorization'] = 'Bearer ' + '';
    config.headers.common['User-Agent'] = 'github-search-okade';
    // config.headers.common['.AspNetCore.Culture'] = abp.utils.getCookieValue('Abp.Localization.CultureName');
    // config.headers.common['Abp.TenantId'] = abp.multiTenancy.getTenantIdCookie();

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
    if (!!error.response && !!error.response.data.error && !!error.response.data.error.message && error.response.data.error.details) {
      Modal.error({
        title: error.response.data.error.message,
        content: error.response.data.error.details,
      });
    } else if(!!error.response && !!error.response.data.error && error.response.data.error.message == 'Current user did not login to the application!'){
      Modal.error({ content: error.response.data.error.message });
      window.location.replace("/");
      return;
    } else if (!!error.response && !!error.response.data.error && !!error.response.data.error.message) {
      Modal.error({
        title: 'LoginFailed',
        content: error.response.data.error.message,
      });
    } else if (!error.response) {
      Modal.error({ content: 'UnknownError' });
    }

    setTimeout(() => {}, 1000);

    return Promise.reject(error);
  }
);

export default http;
