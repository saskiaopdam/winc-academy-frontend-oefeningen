// // While loop met kleuren array
// let colors = ["yellow", "blue", "red", "orange"];
// let i = 0;
// while (i < colors.length) {
//   console.log(colors[i]);
//   i++;
// }
// console.log("dit waren alle kleuren");

// // For loop met kleuren array
// let colors = ["yellow", "blue", "red", "orange"];
// for (i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }
// console.log("dit waren alle kleuren");

// // Array methods: forEach
let colors = ["yellow", "blue", "red", "orange"];

colors.forEach((element) => console.log(element));
console.log("dit waren alle kleuren");

// For loop neemt 5 regels in beslag
// While loop neemt 7 regels in beslag
// forEach method neemt 3 regels in beslag
// De forEach method is het best leesbaar: compact en logisch door gebruik van het woord element.

// Looping through the properties of an object

const object = {
  property1: "A",
  property2: "B",
  property3: "C",
  property4: "D",
  property5: "E",
};
// methode voor ES6:
// for (const property in object) {
//   console.log(object[property]);
// }
// console.log("dit waren alle eigenschappen");

// // betere methode: object wijzigen in array, itereren door array
// const values = Object.values(object);
// for (const value of values) {
//   console.log(value);
// }
// console.log("dit waren alle eigenschappen");

// oplossing Winc:
for (x in object) {
  console.log(object[x]);
}
