const path = require("path");

module.exports = {
    mode: 'development',
    entry: './tests/integration/source.gjsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'foo.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.gjsx$/,
          use: [
            {
              loader: path.resolve('./index.js'),
              options: {}
            }
          ]
        }
      ]
    }
  };
