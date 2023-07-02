const hasLowerCaseCharacter = require("./has-lower-case-character.js");

test("hasLowerCaseCharacter, true", () => {
  expect(hasLowerCaseCharacter("HENKhenk")).toBe(true);
});

test("hasLowerCaseCharacter, false", () => {
  expect(hasLowerCaseCharacter("HENKHENK")).toBe(false);
});
