// 1

// const sum = function (...numbers) {
//   return numbers.reduce(function (prev, curr) {
//     return prev + curr;
//   });
// };

// console.log(sum(1, 2, 3, 4, 5));

// 2

const sum = function (num1, num2, num3) {
  return num1 + num2 + num3;
};

let numbers = [1, 2, 3];

console.log(sum(...numbers));
