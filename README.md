# generic-jsx-loader [![npm version](https://badge.fury.io/js/generic-jsx-loader.svg)](https://badge.fury.io/js/generic-jsx-loader) [![Build Status](https://travis-ci.org/nik-m2/generic-jsx-loader.svg?branch=master)](https://travis-ci.org/nik-m2/generic-jsx-loader)

A webpack loader for custom JSX. Can be used to represent custom data as raw XML inside JavaScript code.

This is a simple wrapper for [generic-jsx-tranpiler](https://www.npmjs.com/package/generic-jsx-transpiler) npm package

## How can this be used?

This can be used to use JSX to turn XML inside JavaScript into any type of data. React transforms JSX into `React.createElement` function calls. This package can be used to easily transform raw XML in JavaScript (JSX) into custom data such as custom function calls, JSON, or other JS code/data.

[React Without JSX](https://reactjs.org/docs/react-without-jsx.html)

## Setup

`npm install generic-jsx-transpiler`

## To create your own JSX loader:

[Writing a Loader](https://webpack.js.org/contribute/writing-a-loader/)
```
import genericJsxloader from 'generic-jsx-loader'

function serialize(component) {
    // This is where you can do custom transformations on the JSX
    //      'component' is a JS object with information on parsed XML
    // This function should return a string containing valid javascript code
    return "'JSX_REPLACEMENT'";
}

export default function loader(source) {
    const parser = new Parser({ serializer: { serialize } });
    return parser.parser({ source });
}
```

## Use for single project

To use this generic loader in a single project add it to `webpack.config.js`:
```
module.exports = {
    ...
    module: {
        rules: [
            {
                test: /\.gjsx$/, //Replace this with any file extension including .js
                use: [
                    {
                        loader: path.resolve('generic-jsx-transpiler'),
                        options: {
                            serialize: function(component) {
                                return "'JSX_REPLACEMENT'[";
                            }
                        }
                    }
                ]
            }
        ]
    }
}
```
