// import path from 'path';
import loaderUtils from 'loader-utils';
import validateOptions from 'schema-utils';

import { Parser } from 'generic-jsx-transpiler';

import schema from './options.js';

function loader(source) {
    if (!source) {
        return "";
    }

    const options = loaderUtils.getOptions(this) || {};

    console.log(options);

    validateOptions(schema, options, 'Generic JSX Loader');

    if (!options.serialize || !(options.serialize instanceof Function) ) {
        throw new Error("You must provide a serialize function as an option!");
    }

    const parser = new Parser({ ...options });
    return parser.parse({ source }); //TODO support inputPath & outputPath
}

export default loader.bind(loader)