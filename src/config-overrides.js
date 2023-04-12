const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@src': path.resolve(__dirname, 'src'),
      '@services': path.resolve(__dirname, 'src/app/shared/services'),
      '@assets': path.resolve(__dirname, 'src/app/assets'),
    },
  };

  return config;
};
