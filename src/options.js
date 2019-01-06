
export default {
    type: 'object',
    properties: {
        serialize: {
            instanceof: 'Function'
        },
        createImports: {
            instanceof: 'Function'
        },
    },
    errorMessage: {
        serialize: "'serialize' option should be {String} or {Function} (https://github.com/nik-m2/generic-jsx-loader#serialize)",
        createImports: "'createImports' option should be {String} or {Function} (https://github.com/nik-m2/generic-jsx-loader#createImports)",
    },
    additionalProperties: true,
};
