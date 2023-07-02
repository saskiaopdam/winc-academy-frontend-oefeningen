// Array methods -2
// Per methode - JavaScript functie

// A array.find
// Vind het hele object Spiderman o.b.v. name

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

// function isSpiderman(superhero) {
//   return superhero.name === "Spiderman";
// }
// const isSpiderman = function (superhero) {
//   return superhero.name === "Spiderman";
// };
// const isSpiderman = (superhero) => {
//   return superhero.name === "Spiderman";
// };

// console.log(superheroes.find(isSpiderman));

const Spiderman = superheroes.find((superhero) => {
  return superhero.name === "Spiderman";
});
console.log(Spiderman);

// B array.forEach of array.map
// Return een array met de cijfers verdubbeld
// Dit lukt mij alleen met .map !!!

const numbers = [1, 2, 3];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(doubledNumbers);
// .map geeft een array terug met verdubbelde cijfers
// .forEach in bovenstaande functie geeft undefined terug ???
// .forEach in onderstaande functie logt van elk item de verdubbelde waarde, maar geen array
numbers.forEach((number) => console.log(number * 2));

// C array.some
// Check of er een getal in de array staat dat groter is dan 10

// const numbers = [1, 4, 3, 6, 9, 7, 11];

// const containsNumberBiggerThan10 = numbers.some((number) => {
//   return number > 10;
// });

// console.log(containsNumberBiggerThan10);

// D array.includes
// Check of er een string "Italy" in de array staat

const countries = [
  "Canada",
  "France",
  "Germany",
  "Italy",
  "Japan",
  "United Kingdom",
  "United States",
];

const includesItaly = countries.includes("Italy"); // Geen functie ...
console.log(includesItaly);

// E array.forEach
// JavaScript functie die elke integer vertienvoudigt

// const numbers = [1, 4, 3, 6, 9, 7, 11];

// const numbersTimesTen = numbers.forEach((number) => {
//   return number * 10;
// });
// console.log(numbersTimesTen);
// // .forEach in bovenstaande functie geeft undefined terug ???
// // .forEach in onderstaande functie logt van elk item de vertienvoudigde waarde
// numbers.forEach((number) => console.log(number * 10));

// F array.every
// Check of alle waardes in de array onder de 100 zijn

// const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];

// const allNumbersLowerThan100 = numbers.every((number) => {
//   return number < 100;
// });

// console.log(allNumbersLowerThan100);

// G array.reduce

// const numbers = [
//   1,
//   81,
//   4,
//   53,
//   3,
//   6,
//   79,
//   2,
//   43,
//   7,
//   28,
//   11,
//   77,
//   84,
//   98,
//   101,
//   206,
//   234,
// ];

// const total = numbers.reduce((currentTotal, number) => {
//   return number + currentTotal;
// }, 0);

// console.log(total);
