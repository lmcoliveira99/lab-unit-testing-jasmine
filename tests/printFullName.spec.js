// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
       it ("should be defined", () => {
       expect(printFullName).toBeDefined();
    });

    it("should take one argument", () => {
    expect(printFullName.length).toBe(1);
    });

    it("should return a string with first and last name separated by a space", () => {
        expect(printFullName({ firstName: "Leonardo", lastName: "Oliveira" })).toEqual("Leonardo Oliveira");
        expect(printFullName({ firstName: "Leonardo", lastName: "Oliveira" })).toEqual("Leonardo Oliveira");
    });

    it("should return undefined if the argument passed is not an object", () => {
        expect(printFullName("John Doe")).toEqual(undefined);
        expect(printFullName(123)).toEqual(undefined);
        expect(printFullName(true)).toEqual(undefined)
    });

    it("should return undefined if firstName or lastName fields are missing", () => {
        expect(printFullName({ firstName: "John" })).toEqual(undefined);
        expect(printFullName({ lastName: "Doe" })).toEqual(undefined);
        expect(printFullName({})).toEqual(undefined)
    });

    it("should return undefined if firstName or lastName are not strings", () => {
        expect(printFullName({ firstName: 1231, lastName: "Doe" })).toEqual(undefined);
        expect(printFullName({ firstName: "Ed", lastName: 1 })).toEqual(undefined);
        expect(printFullName({ firstName: 1231, lastName: 1 })).toEqual(undefined)
    });

})
});