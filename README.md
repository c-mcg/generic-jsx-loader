# generic-jsx-loader

A webpack loader for custom JSX

This is a simple wrapper for [generic-jsx-tranpiler](https://www.npmjs.com/package/generic-jsx-transpiler) npm package

## Setup

`npm install generic-jsx-transpiler --save-dev`

## Usage

webpack.config.js:
```
module.exports = {
    ...
    module: {
        rules: [
            {
                test: /\.gjsx$/, //Replace this with any file extension including .js
                use: [
                    {
                        loader: path.resolve(__dirname, '../../index.js'),
                        options: {
                            serialize: function() {
                                return jsxReplacement;
                            }
                        }
                    }
                ]
            }
        ]
    }
}
```
