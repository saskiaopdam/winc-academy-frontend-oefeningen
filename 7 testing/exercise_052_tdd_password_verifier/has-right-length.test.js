const hasRightLength = require("./has-right-length.js");

test("hasRightLength, true", () => {
  expect(hasRightLength("12345678")).toBe(true);
});

test("hasRightLength, false", () => {
  expect(hasRightLength("123456789")).toBe(false);
});
