const hasDigit = require("./has-digit.js");

test("hasDigit, true", () => {
  expect(hasDigit("HENKhenk1")).toBe(true);
});

test("hasDigit, false", () => {
  expect(hasDigit("HENKHENK")).toBe(false);
});
