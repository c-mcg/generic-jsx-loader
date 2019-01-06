import loaderUtils from 'loader-utils';
import validateOptions from 'schema-utils';
import * as genericJsx from 'generic-jsx-transpiler';

import loader from "../src/loader";

jest.mock('schema-utils');

// This mock had to be wrapped because `jest.fn() instanceof Function === false`
const mockSerialize = jest.fn();
const defaultOptions = { serialize: (...args) => mockSerialize(...args) };
loaderUtils.getOptions = jest.fn().mockReturnValue(defaultOptions);

// Took some hacks to properly mock Parser (code smell...)
const oldParser = genericJsx.default.Parser;
var Parser = jest.fn();
const mockParse = jest.fn();
Parser.mockImplementation(() => {
    return { parse: mockParse };
});
genericJsx.default.Parser = Parser;

describe("loader", () => {

    const oldGetOptions = loaderUtils.getOptions;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterAll(() => {
        loaderUtils.getOptions = oldGetOptions;
        genericJsx.default.Parser = oldParser;
    });

    it("requires a serialize option", () => {
        loaderUtils.getOptions.mockReturnValueOnce({});
        expect(callLoaderWithSource).toThrow();
        expect(loaderUtils.getOptions).toHaveBeenCalled();
    });

    it("passes all options to Parser constructor", () => {
        const optionsWithCreateImport = {
            ...defaultOptions,
            createImports: () => "import 'test'",
            test: 'works',
        };
        loaderUtils.getOptions.mockReturnValueOnce(optionsWithCreateImport);

        callLoaderWithSource();

        expect(Parser).toBeCalledWith({ serializer: optionsWithCreateImport });
    });

    it('parses the source', () => {
        const source = "test";
        
        loader(source);

        expect(validateOptions).toBeCalledWith(expect.any(Object), defaultOptions, 'Generic JSX Loader');
        expect(Parser).toBeCalledWith({ serializer: defaultOptions });
        expect(mockParse).toBeCalledWith({ source });
    });

});

function callLoaderWithSource(otherParams=[]) {
    return loader("test", ...otherParams);
}
