import loader from "../src/loader"

describe("generic-jsx-loader", () => {

    it("Exports a function that returns a string", () => {
        expect(loader).toBeInstanceOf(Function);
        expect(loader()).toBeInstanceOf(String);
    })

})