const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#006BFF',
          '@link-color': '#006BFF',
        },
      },
    },
  ],
}