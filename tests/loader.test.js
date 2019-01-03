import loaderUtils from 'loader-utils';

import loader from "../src/loader"

describe("generic-jsx-loader", () => {

    const oldGetOptions = loaderUtils.getOptions;

    beforeAll(() => {
        loaderUtils.getOptions = jest.fn().mockReturnValue({ serialize: () => {} })
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterAll(() => {
        loaderUtils.getOptions = oldGetOptions;
    });

    it("requires a serialize option", () => {
        loaderUtils.getOptions.mockReturnValueOnce({});
        expect(() => {
            callLoaderWithSource()
        }).toThrow();
        expect(loaderUtils.getOptions).toHaveBeenCalled();
    });

});

function callLoaderWithSource() {
    return loader("test");
}