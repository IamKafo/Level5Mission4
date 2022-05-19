const fibonacci = require('./fibonacci.js');

describe("fibonacci tests", () => {
    it("returns [0,1] when 2", () => {
        const expected = [0, 1];
        const actual = fibonacci(2);
        expect(actual).toStrictEqual(expected);
    })

    it("returns [0] when 1", () => {
        // expect(fibonacci(1)).toStrictEqual([0, 1]);
        const expected = [0];
        const actual = fibonacci(1);
        expect(actual).toStrictEqual(expected);
    })

    it("it returns Not a Number when Kafo", () => {
        // expect(fibonacci(2)).toStrictEqual([0, 1]);
        const expected = "Not a Number";
        const actual = fibonacci("Kafo");
        expect(actual).toStrictEqual(expected);
    })

    it("it returns [] when 0", () => {
        // expect(fibonacci(0)).toStrictEqual([]);
        const expected = [];    //------------- Arrange ----------
        const actual = fibonacci(0);  //--------- Act -----------
        expect(actual).toStrictEqual(expected); // --------------- Assert --------------
    })
})