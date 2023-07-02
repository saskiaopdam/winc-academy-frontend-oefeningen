// Array methods -1
// JavaScript functies met

// A array.push
// JavaScript functie die "cool" toevoegt aan array

const words = ["nice", "awesome", "tof"];

const addTheWordCool = function () {
  words.push("cool");
};

addTheWordCool();
console.log(words);

// B array.length
// JavaScript functie die het aantal elementen in een array retourneert

const fruits = ["appels", "peren", "citroenen"];

const numberOfFruits = function () {
  return fruits.length;
};

console.log(numberOfFruits());

// C array[index - eerste]
// JavaScript functie die het eerste element in een array retourneert

const landen = ["België", "Nederland", "Luxemburg"];

const eersteLand = function () {
  return landen[0];
};

console.log(eersteLand());

// D array[index - laatste]
// JavaScript functie die het laatste element in een array retourneert

const dieren = ["Haas", "Cavia", "Kip", "Schildpad"];

const laatsteDier = function () {
  return dieren[dieren.length - 1];
};

console.log(laatsteDier());

// E array.slice + array.splice
// JavaScript functie die het eerste element uit een array haalt en het restant retourneert

//Slice: returned kopie van een deel van het array - geen mutatie

const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function () {
  return presidents.slice(1, presidents.length);
};

console.log("slice ", impeachTrumpSlice());
console.log(presidents);

//Splice: mutatie - return value: verwijderde items

// const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSplice = function () {
  return presidents.splice(1, 3);
};

console.log("splice ", impeachTrumpSplice());

console.log(presidents);

// F array.join
// JavaScript functie die alle elementen aaneenrijgt tot een string met spaties

const strings = ["Winc", "Academy", "is", "leuk"];

const stringsTogether = function () {
  return strings.join(" ");
};

console.log(stringsTogether());

// G array.concat
// JavaScript functie die 2 arrays samenvoegt

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combineArrays = function () {
  return array1.concat(array2);
};

console.log(combineArrays());
