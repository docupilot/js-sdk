const path = require('path');

const config = {
  entry: './src/sideload.ts',
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: 'docupilot-js-sdk.min.js',
    path: path.resolve(__dirname, 'dist', 'web'),
    libraryTarget: 'var',
    library: 'DocupilotAPI'
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map';
    config.output.filename = 'docupilot-js-sdk.js';
  }
  return config;
};
