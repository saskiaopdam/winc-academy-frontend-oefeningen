// Checking if a number is big
// Kom er niet uit
const bigNumberCheck = function (number) {
  const numberBiggerThanHundred = true;
  if (numberBiggerThanHundred) {
    console.log("true");
  } else {
    console.log("false");
  }
};
// Oplossing
// Functie produceert iets, gebruik geen console.log
const numberIsBig = function (number) {
  if (number > 100) {
    return true;
  } else {
    return false;
  }
};

console.log(numberIsBig(150));
console.log(numberIsBig(50));
console.log(numberIsBig(0));
console.log(numberIsBig(999));

// Bouncer at a club
// Kom er niet uit
const BouncerBot = function () {
  if (BouncerBot) console.log("come in");
  console.log("It's too busy now, come back later");
  console.log();
};

// Oplossing
const getBouncerReaction = function (
  maxVisitors,
  currentVisitors,
  ageOfPotentialVisitor
) {
  if (ageOfPotentialVisitor < 18) {
    return "this is a club for adults";
  }
  if (currentVisitors >= maxVisitors) {
    return "it's too busy now, come back later";
  } else {
    return "come in";
  }
};

console.log(getBouncerReaction(2000, 0, 15)); //"this is a club for adults"
console.log(getBouncerReaction(2000, 1999, 50)); //"come in"
console.log(getBouncerReaction(2000, 2000, 40)); //"it's too busy now, come back later"

// Calculating the average

const average = function (number1, number2, number3, number4, number5) {
  const average = (number1 + number2 + number3 + number4 + number5) / 5;
  return average;
};

const result = average(1, 2, 3, 4, 5);
console.log(result);
