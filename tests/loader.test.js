import loader from "../src/loader"

describe("generic-jsx-loader", () => {

    it("Exports a function", () => {
        expect(loader).toBeInstanceOf(Function);
    })

})