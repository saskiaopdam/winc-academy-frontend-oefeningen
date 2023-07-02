// Button clicked alert when click on first button
const button = document.querySelector("#mybutton");
button.addEventListener("click", function () {
  alert("button clicked");
});

// Change page background when click on second button
// const button2 = document.querySelector("#mybutton2");
// button2.addEventListener("click", function () {
//   const body = document.querySelector("body");
//   body.classList.add("red-background");
// });

// Toggle background whend click on second button
const button2 = document.querySelector("#mybutton2");
button2.addEventListener("click", function () {
  const body = document.querySelector("body");
  body.classList.toggle("red-background");
});
