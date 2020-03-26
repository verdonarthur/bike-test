const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = (env, argv) => {
  let config = {
    entry: './frontend/index.js',
    output: {
      filename: 'build.js',
      path: path.resolve(__dirname, './public/dist')
    },
    externals: [nodeExternals()]
  };

  if (argv.mode === 'development') {
    config.plugins = [
      new WebpackShellPlugin({
        onBuildEnd: ['npm run express:watch']
      })
    ];
  }

  return config;
};
