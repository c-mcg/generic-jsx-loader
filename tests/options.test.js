import options from '../src/options';

describe('options', () => {

    it('exports an object', () => {
        expect(options).toBeInstanceOf(Object);
    });

    it('has properties required by webpack', () => {
        expect(options).toHaveProperty('type', 'object');
        expect(options).toHaveProperty('properties', expect.any(Object));
        expect(options).toHaveProperty('errorMessage', expect.any(Object));
        expect(options).toHaveProperty('additionalProperties', false);
    });

    it('has an error message for every property', () => {
        const {
            properties,
            errorMessage,
        } = options;
        const handledErrors =  Object.keys(errorMessage);
        const propertiesWithoutMessage = Object.keys(properties)
            .filter(name => !handledErrors.includes(name));
        
        expect(propertiesWithoutMessage)
            .toHaveLength(0);
    });

    it('has a serialize "property" that is a function', () => {
        const { properties } = options;

        expect(properties)
            .toHaveProperty('serialize', {
                instanceof: 'Function',
            });
    });

});
