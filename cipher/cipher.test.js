const caesarCipher = require("./cipher");

it("Encodes the received string using a key", () => {
  expect(
    caesarCipher(
      "if he had anything confidential to say, he wrote it in cipher.",
      7
    )
  ).toMatch("pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly.");
});

it("It maintains original case", () => {
  expect(caesarCipher("I love this GAME", 5)).toMatch("N qtaj ymnx LFRJ");
});
