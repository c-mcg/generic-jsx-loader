const path = require("path");

module.exports = {
    //...
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
