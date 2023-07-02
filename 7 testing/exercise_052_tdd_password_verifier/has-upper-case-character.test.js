const hasUpperCaseCharacter = require("./has-upper-case-character.js");

test("hasUpperCaseCharacter, true", () => {
  expect(hasUpperCaseCharacter("HENKhenk")).toBe(true);
});

test("hasUpperCaseCharacter, false", () => {
  expect(hasUpperCaseCharacter("henkhenk")).toBe(false);
});
