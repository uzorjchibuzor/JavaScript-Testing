const Calculator = require("./calculator");

it("add two numbers", () => {
  expect(new Calculator().add(2, 3)).toBe(5);
});

it("subtract a number from another number", () => {
  expect(new Calculator().subtract(9, 3)).toBe(6);
});

it("multiply numbers", () => {
  expect(new Calculator().multiply(2, 3)).toBe(6);
});

it("divides a number by another number", () => {
  expect(new Calculator().divide(10, 2)).toBe(5);
});
