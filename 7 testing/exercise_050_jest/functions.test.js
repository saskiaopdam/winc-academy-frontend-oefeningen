import { functions } from "./functions.js";
// import {functions} from "./functions.js";

test("Should be null", () => {
  // Begin met expect()
  // Binnen de eerste haken zet je hetgeen je wilt testen. Dat zal een functie zijn.
  // Daarna volgt je .toBeSomethingSomething functie,
  // zoek de geschikte functie in de documentatie.
  // In dit geval willen we checken of de functie "isNull()" ook daadwerkelijk
  // Null returned. Dus "toBeNull()" makes the most sense.
  expect(isNull()).toBeNull();
});

test("checkValue Should be falsy when argument is undefined", () => {
  expect(checkValue(undefined)).toBeFalsy();
});

// test niet laten slagen:
// test("checkValue Should be falsy when argument is undefined", () => {
//   expect(functions.checkValue()).toBeDefined();
// });
// Test Suites 1 failed
// expect(received).toBeDefined()
// Received: undefined

test("User should be Brad Traversy object", () => {
  expect(createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy",
  });
});

// Tests zijn eigenlijk gewoon functies. Om dat te laten zien laten we je
// nu tests maken die werken zonder input van buitenaf:

// Less than or greater than
test("Should be under or equal to 1600", () => {
  const load1 = 800;
  const load2 = 800;
  // expect(load1 + load2).toBe.....
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test("There is no I in team", () => {
  //  expect('team').not.to..........;
  expect("team").not.toMatch(/I/);
});

// Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  // expect(usernames).to......
  expect(usernames).toContain("admin");
});
