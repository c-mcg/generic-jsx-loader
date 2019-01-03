// import path from 'path';
import loaderUtils from 'loader-utils';
// import validateOptions from 'schema-utils';

// import { Parser } from 'generic-jsx-transpiler';

// import schema from './options.json';

export default function loader(source) {
    if (!source) {
        return "";
    }

    const options = loaderUtils.getOptions(this) || {};

    // validateOptions(schema, options, 'Generic JSX Loader');

    if (!options.serialize) {
        throw new Error("You must provide a serialize function as an option!");
    }

    // const {
    //     serialize
    // } = options;

    return source;
}
