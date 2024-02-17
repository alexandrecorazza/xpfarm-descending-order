const { descendingOrder } = require("../src/index");

test("should return an integer in descending order", () => {
    expect(descendingOrder(123456789)).toBe(987654321);
});