const reverseString = require("./reverseString");

it("Reverses a string", () => {
  expect(reverseString("abcde")).toBe("edcba");
});
