const btnLandenlijst = document.getElementById("btnLandenlijst");
const btnSteenbokvrouwen = document.getElementById("btnSteenbokvrouwen");
const result = document.getElementById("result");

const displaySelection = (elements) => {
  result.innerHTML = "";
  let sortedElements = elements.sort();
  console.log(sortedElements);

  sortedElements.forEach((element) => {
    // console.log(element);
    let newLi = document.createElement("li");
    // console.log(newLi);
    result.appendChild(newLi);
    newLi.textContent = element;
  });
};

const toonLandenlijst = () => {
  let elements = randomPersonData.map((element) => {
    return element.region;
  });
  console.log(elements);
  displaySelection(elements);
};

const toonSteenbokvrouwen = () => {
  let steenbokvrouwen = randomPersonData.filter((element) => {
    let month = element.birthday.dmy.slice(3, 5);
    let day = element.birthday.dmy.slice(0, 2);
    if (month === "12" || month === "01") {
      return (
        element.gender === "female" &&
        element.age > 30 &&
        day >= 19 &&
        day <= 22
      );
    }
  });
  let elements = steenbokvrouwen.map((element) => {
    // return `${element.name} ${element.surname}`;
    return element.name + " " + element.surname + " " + element.photo;
  });
  console.log(elements);
  // Je krijgt nu 0 items terug, want geen enkel item voldoet aan de criteria. Maar als je in de randomPersonData.js bij neem Lelia Firulescu de datum wijzigt in 22/01/1989 dan wordt zij wel gevonden.
  displaySelection(elements);
};

btnLandenlijst.addEventListener("click", toonLandenlijst);
btnSteenbokvrouwen.addEventListener("click", toonSteenbokvrouwen);
