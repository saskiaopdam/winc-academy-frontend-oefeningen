// Array methods - .map .filter .reduce

const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];

// 1 Maak een array van alle superhelden namen
const superheroNames = superheroes.map((superhero) => {
  return superhero.name;
});
console.log(superheroNames);

// 2 Maak een array van alle "lichte" superhelden (< 190 pounds)
const lightweightSuperheroes = superheroes.filter((superhero) => {
  return superhero.weight < 190;
});
console.log(lightweightSuperheroes);

// 3 Maak een array met de namen van de superhelden die 200 pounds wegen
// chaining
const namesOfLightweightSuperheroes = superheroes
  .filter((superhero) => {
    return superhero.weight < 190;
  })
  .map((superhero) => {
    return superhero.name;
  });
console.log(namesOfLightweightSuperheroes);

// 4 Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad

const superheroFirstAppearances = superheroes.map((superhero) => {
  return superhero.first_appearance;
});
console.log(superheroFirstAppearances);

// 5 Maak een array met alle superhelden van DC Comics.

const namesOfSuperheroesOfDCComics = superheroes
  .filter((superhero) => {
    return superhero.publisher === "DC Comics";
  })
  .map((superhero) => {
    return superhero.name;
  });
console.log(namesOfSuperheroesOfDCComics);

// Maak een array met alle superhelden van Marvel Comics.

const namesOfSuperheroesOfMarvelComics = superheroes
  .filter((superhero) => {
    return superhero.publisher === "Marvel Comics";
  })
  .map((superhero) => {
    return superhero.name;
  });
console.log(namesOfSuperheroesOfMarvelComics);

// 6 Tel het gewicht van alle superhelden van DC Comics bij elkaar op.
// Tip: conditionals (getallen zijn string en eentje is undefined)

// stap 1 alle helden van DC Comics met .filter
// stap 2 gewicht optellen met .reduce

const totalWeightOfSuperheroesOfDCComics = superheroes
  .filter((superhero) => {
    return superhero.publisher === "DC Comics";
  })
  .reduce((currentTotalWeight, superhero) => {
    // parseInt(weight); // strings omzetten naar integers met parseInt ???
    return superhero.weight + currentTotalWeight;
  }, 0);
console.log(totalWeightOfSuperheroesOfDCComics);

// 7 Tel het gewicht van alle superhelden van DC Comics bij elkaar op.

// 8 Zoek de zwaarste superheld
// stap 1 array met gewichten
const superheroWeights = superheroes.map((superhero) => {
  return superhero.weight;
});
// console.log(superheroWeights);

console.log(Math.max(superheroWeights));
// output: NaN ??? komt door weight: undefined?
