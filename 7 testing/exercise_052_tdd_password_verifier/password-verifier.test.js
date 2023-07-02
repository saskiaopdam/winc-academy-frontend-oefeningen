const {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
} = require("./password-verifier.js");

// Testen voor utility functions

describe("utility tests", () => {
  // 1. hasRightLength
  test("hasRightLength, true", () => {
    expect(hasRightLength("12345678")).toBe(true);
  });

  // test("hasRightLength, true2", () => {
  //   expect(hasRightLength("")).toBe(true);
  // });

  test("hasRightLength, false", () => {
    expect(hasRightLength("123456789")).toBe(false);
  });

  // test("hasRightLength, false2", () => {
  //   expect(hasRightLength(null)).toBe(false);
  // });

  // 2. isNotNull
  test("isNotNull, true", () => {
    expect(isNotNull(!null)).toBe(true);
  });

  test("isNotNull, false", () => {
    expect(isNotNull(null)).toBe(false);
  });

  // 3. hasUpperCaseCharacter
  test("hasUpperCaseCharacter, true", () => {
    expect(hasUpperCaseCharacter("HENKhenk")).toBe(true);
  });

  test("hasUpperCaseCharacter, false", () => {
    expect(hasUpperCaseCharacter("henkhenk")).toBe(false);
  });

  // 4. hasLowerCaseCharacter
  test("hasLowerCaseCharacter, true", () => {
    expect(hasLowerCaseCharacter("HENKhenk")).toBe(true);
  });

  test("hasLowerCaseCharacter, false", () => {
    expect(hasLowerCaseCharacter("HENKHENK")).toBe(false);
  });
  // 5. hasDigit
  test("hasDigit, true", () => {
    expect(hasDigit("HENKhenk1")).toBe(true);
  });

  test("hasDigit, false", () => {
    expect(hasDigit("HENKHENK")).toBe(false);
  });
  // 6. minimumConditionsReached
  test("minimumConditionsReached, true", () => {
    const conditions = [true, true, true, false, false];
    expect(minimumConditionsReached(conditions)).toBe(true);
  });

  test("minimumConditionsReached, false", () => {
    const conditions = [true, true, false, false, false];
    expect(minimumConditionsReached(conditions)).toBe(false);
  });
});

describe("verifyPassword tests", () => {
  test("verifyPassword, true", () => {
    expect(verifyPassword("Henkie1")).toBe(true);
  });

  test("verifyPassword, false", () => {
    expect(verifyPassword("1111")).toBe(false);
  });
});
