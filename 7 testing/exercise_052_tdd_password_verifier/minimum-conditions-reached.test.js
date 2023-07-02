const minimumConditionsReached = require("./minimum-conditions-reached.js");

test("minimumConditionsReached, true", () => {
  const conditions = [true, true, true, false, false];
  expect(minimumConditionsReached(conditions)).toBe(true);
});

test("minimumConditionsReached, false", () => {
  const conditions = [true, true, false, false, false];
  expect(minimumConditionsReached(conditions)).toBe(false);
});
