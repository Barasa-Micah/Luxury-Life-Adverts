const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    process: require.resolve('process/browser'),
    path: require.resolve('path-browserify'),
    stream: require.resolve('stream-browserify'),
    url: require.resolve('url'),
    buffer: require.resolve('buffer/'),
  };
  
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  );

  return config;
};
