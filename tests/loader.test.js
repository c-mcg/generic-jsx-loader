// #global jest
import loaderUtils from 'loader-utils';

import loader from "../src/loader";

describe("generic-jsx-loader", () => {

    const oldGetOptions = loaderUtils.getOptions;

    beforeAll(() => {
        const options = { serialize: () => {} };
        loaderUtils.getOptions = jest.fn().mockReturnValue(options);
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterAll(() => {
        loaderUtils.getOptions = oldGetOptions;
    });

    it("requires a serialize option", () => {
        loaderUtils.getOptions.mockReturnValueOnce({});
        expect(callLoaderWithSource).toThrow();
        expect(loaderUtils.getOptions).toHaveBeenCalled();
    });

    it('', () => {

    });

});

function callLoaderWithSource() {
    return loader("test");
}
