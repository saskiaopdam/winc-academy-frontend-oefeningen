const minimumConditionsReached = (conditions) => {
  //   const trueConditions = conditions.filter((bool) => bool);
  const trueConditions = conditions.filter(Boolean);
  //.filter(Boolean) removes values from a list which are falsey
  return trueConditions.length >= 3;
};

module.exports = minimumConditionsReached;
