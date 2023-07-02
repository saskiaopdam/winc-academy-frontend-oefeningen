// Deel 1 - elementen toevoegen aan de DOM

const bigFiveButtons = document.getElementsByClassName("big-five-button");
// console.log(bigFiveButtons);

for (let i = 0; i < bigFiveButtons.length; i++) {
  const addAnimalToList = function () {
    bigFiveAnimal = bigFiveButtons[i].innerHTML;
    // console.log(bigFiveAnimal);
    const newLi = document.createElement("li");
    newLi.classList.add("spotted-animals-list-item");
    newLi.innerHTML = bigFiveAnimal;
    // console.log(newLi);
    const SpottedAnimals = document.getElementById("spotted-animals-list");
    // console.log(SpottedAnimals);
    SpottedAnimals.appendChild(newLi);
  };
  bigFiveButtons[i].addEventListener("click", addAnimalToList);
  //   console.log(addAnimalToList);
}

// Deel 2 - 1 element verwijderen uit de DOM

const removeFirstItemButton = document.getElementById(
  "remove-first-item-button"
);
// console.log(removeFirstItemButton);

const removeFirstItem = function () {
  //   console.log("You clicked the button");
  const SpottedAnimals = document.getElementById("spotted-animals-list");
  const firstItem = SpottedAnimals.getElementsByClassName(
    "spotted-animals-list-item"
  )[0];
  //   console.log(firstItem);
  SpottedAnimals.removeChild(firstItem);
};

removeFirstItemButton.addEventListener("click", removeFirstItem);
console.log(removeFirstItem);

// Deel 3 - Meerdere elementen verwijderen uit de DOM

const removeAllButton = document.getElementById("remove-all-button");
// console.log(removeAllButton);

const parent = document.getElementById("spotted-animals-list");
// console.log(parent);
const children = parent.getElementsByClassName("spotted-animals-list-item");
// console.log(children);

const removeAllItems = function () {
  // console.log("You clicked the button");

  // lijstinhoud in 1 keer verwijderen:
  parent.innerHTML = "";

  // lijstitems een voor een verwijderen 
  // met parent.removeChild:

  while (parent.firstElementChild) {
    parent.removeChild(parent.firstElementChild);
  }

   // lijstitems een voor een verwijderen 
   // met parent.remove():
parent.querySelectorAll('*').forEach(n => n.remove());

};

removeAllButton.addEventListener("click", removeAllItems);
// console.log(removeAllItems);
