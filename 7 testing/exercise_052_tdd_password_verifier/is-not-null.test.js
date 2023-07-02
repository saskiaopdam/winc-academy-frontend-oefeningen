const isNotNull = require("./is-not-null.js");

test("isNotNull, true", () => {
  expect(isNotNull(!null)).toBe(true);
});

test("isNotNull, false", () => {
  expect(isNotNull(null)).toBe(false);
});
