// // Check if number is bigger than 100
const checkBigNumber = function (number) {
  if (number > 100) {
    return true;
  } else {
    return false;
  }
};

// console.log(checkBigNumber(90));
console.log(checkBigNumber(110));

// This is a function that does something
// Wrong: this is a function that produces something

// Bouncer at a club
const bouncerCheck = function (maxNumber, currentNumber, age) {
  if (currentNumber <= maxNumber && age >= 18) {
    return "come in";
  } else if (currentNumber > maxNumber && age >= 18) {
    return "it's too busy now, come back later";
  } else {
    return "this is a club for adults";
  }
};

console.log(bouncerCheck(1000, 999, 30));
console.log(bouncerCheck(1000, 1200, 30));
console.log(bouncerCheck(1000, 999, 16));

//This is a function that produces something

// Calculating the average
const calculateAverage = function (
  number1,
  number2,
  number3,
  number4,
  number5
) {
  const total = number1 + number2 + number3 + number4 + number5;
  const average = total / 5;
  return average;
};

// console.log(calculateAverage(1, 2, 3, 4, 5));
console.log(calculateAverage(2, 4, 6, 8, 10));

//This is a function that produces something
