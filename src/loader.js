// import path from 'path';
import loaderUtils from 'loader-utils';
import validateOptions from 'schema-utils';

import { Parser } from 'generic-jsx-transpiler';

import schema from './options.js';

function loader(source, options={}) {
    if (!source) {
        return "";
    }

    options = {
        ...options,
        ...loaderUtils.getOptions(this) || {},
    };

    validateOptions(schema, options, 'Generic JSX Loader');

    if (!options.serialize || !(options.serialize instanceof Function) ) {
        throw new Error("You must provide a serialize function as an option! (generic-jsx-loader)");
    }

    const serializer = { ...options };
    const parser = new Parser({ serializer });
    return parser.parse({ source }); //TODO support inputPath & outputPath
}

export default loader;
