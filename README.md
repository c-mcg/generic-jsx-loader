# generic-jsx-loader

A webpack loader for custom JSX. Can be used for easily creating other JSX loaders

This is a simple wrapper for [generic-jsx-tranpiler](https://www.npmjs.com/package/generic-jsx-transpiler) npm package

## Setup

`npm install generic-jsx-transpiler`

## To create your own jsx loader:
```
import genericJsxloader from 'generic-jsx-loader

function serialize(component) {
    // This is where you can do custom transformations on the JSX
    //      'component' is a JS object with information on parsed JSX
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
