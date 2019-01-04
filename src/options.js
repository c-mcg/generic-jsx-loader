
export default {
    type: 'object',
    properties: {
        serialize: {
            instanceof: 'Function'
        },
    },
    errorMessage: {},
    additionalProperties: false,
/***********************************/
/***********************************/
// Copied from https://github.com
//   /webpack-contrib/file-loader
// for reference while developing!
/***********************************/
/***********************************/
    // "properties": {
    //     "name": {
    //         "anyOf": [
    //             {
    //                 "type": "string"
    //             },
    //             {
    //                 "instanceof": "Function"
    //             }
    //         ]
    //     },
    //     "outputPath": {
    //         "anyOf": [
    //             {
    //                 "type": "string"
    //             },
    //             {
    //                 "instanceof": "Function"
    //             }
    //         ]
    //     },
    //     "publicPath": {
    //         "anyOf": [
    //             {
    //                 "type": "string"
    //             },
    //             {
    //                 "instanceof": "Function"
    //             }
    //         ]
    //     },
    //     "context": {
    //         "type": "string"
    //     },
    //     "emitFile": {
    //         "type": "boolean"
    //     },
    //     "regExp": {
    //         "anyOf": [
    //             {
    //                 "type": "string"
    //             },
    //             {
    //                 "instanceof": "RegExp"
    //             }
    //         ]
    //     }
    // },

    // Error messages
    //     "publicPath": "should be {String} or {Function} (https://github.com/webpack-contrib/file-loader#publicpath)",
};
