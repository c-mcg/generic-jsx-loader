
export default {
    type: 'object',
    properties: {
        serialize: {
            instanceof: 'Function'
        },
    },
    errorMessage: {
        serialize: "should be {String} or {Function} (https://github.com/nik-m2/generic-jsx-loader#serialize)",
    },
    additionalProperties: false,
};
