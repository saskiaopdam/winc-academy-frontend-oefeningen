// Utility functions

const hasRightLength = (string) => string.length < 9;
// winc: && isNotNull(string);
// const hasRightLength = (string) => string.length < 9 && isNotNull(string);

// cannot read property length of null

const isNotNull = (string) => string !== null;

const hasUpperCaseCharacter = (string) => /[A-Z]/.test(string); // winc: && isNotNull(string);

const hasLowerCaseCharacter = (string) => /[a-z]/.test(string); // winc: && isNotNull(string);

const hasDigit = (string) => /[0-9]/.test(string);
// const hasDigit = (string) => /\d/.test(string);

const minimumConditionsReached = (conditions) => {
  // const trueConditions = conditions.filter((bool) => bool);
  const trueConditions = conditions.filter(Boolean);
  //.filter(Boolean) removes values from a list which are falsey
  return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = (password) => {
  const conditions = [
    isNotNull(password),
    hasRightLength(password),
    hasUpperCaseCharacter(password),
    hasLowerCaseCharacter(password),
    hasDigit(password),
  ];
  const result =
    minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

  return result;
};

module.exports = {
  verifyPassword, // verifyPassword is not defined
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
};
