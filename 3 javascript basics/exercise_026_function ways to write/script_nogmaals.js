// Function expression
// const total = function (number1, number2) {
//   const square1 = number1 * number1;
//   const square2 = number2 * number2;
//   const sum = square1 + square2;
//   const squareSum = sum * sum;
//   return squareSum;
// };

// console.log(total(1, 2));

// // Function declaration
// function total(number1, number2) {
//   const square1 = number1 * number1;
//   const square2 = number2 * number2;
//   const sum = square1 + square2;
//   const squareSum = sum * sum;
//   return squareSum;
// }

// console.log(total(1, 2));

// Arrow function
const total = (number1, number2) => {
  const square1 = number1 * number1;
  const square2 = number2 * number2;
  const sum = square1 + square2;
  const squareSum = sum * sum;
  return squareSum;
};

console.log(total(1, 2));
