/*const age = 25;
if (age >= 18) {
  console.log("you may enter");
} else {
  console.log("you are too young, please wait outside");
}*/

const age = 30;
if (age >= 18) {
  console.log("you may enter");
} else {
  console.log("you are too young, please wait outside");
}
if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
}

const name = "Pascal";
if (name == "Sarah" || name == "Bram") {
  console.log("Je krijgt een gratis biertje!");
} else {
  console.log("Je krijgt geen gratis biertje");
}

const totalAmount = 100;
if (totalAmount >= 100) {
  console.log("Je krijgt een gratis flesje champagne");
} else if (totalAmount > 50) {
  console.log("Je krijgt een gratis protie nachos");
} else if (totalAmount > 25) {
  console.log("Je krijgt gratis (vega)bitterballen");
} else {
  console.log("Helaas, je krijgt geen gratis tractatie");
}

const isFemale = true;
if (isFemale) {
  console.log("welcome to our ladiesnight");
} else {
  console.log("bad luck, no men allowed");
}

const driverStatus = "not bob";
if (driverStatus == "bob") {
  console.log("it is safe for you to drive");
} else {
  console.log("it's not safe for you to drive");
}

var myAge = 25;

if (myAge < 18 || myAge > 30) {
  console.log("you aint coming");
} else {
  console.log("You can come, you cool due");
}
