import loaderUtils from 'loader-utils';
import * as genericJsx from 'generic-jsx-transpiler';

import loader from "../src/loader";

const oldParser = genericJsx.default.Parser;
var Parser = jest.fn();

const mockParse = jest.fn();
Parser.mockImplementation(() => {
    return { parse: mockParse };
});

genericJsx.default.Parser = Parser;

describe("loader", () => {

    const oldGetOptions = loaderUtils.getOptions;
    const options = { serialize: jest.fn() };

    beforeAll(() => {
        loaderUtils.getOptions = jest.fn().mockReturnValue(options);
    });

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

    it('parses the source', () => {
        const source = "test";
        
        loader(source);

        expect(Parser).toBeCalledWith({ ...options });
        expect(mockParse).toBeCalledWith({ source });
    });

});

function callLoaderWithSource(otherParams=[]) {
    return loader("test", ...otherParams);
}
