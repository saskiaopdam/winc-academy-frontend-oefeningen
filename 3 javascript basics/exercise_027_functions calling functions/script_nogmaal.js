// Hey kiddo

// const isAdult = function (age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const greet = function (age) {
//   if (isAdult(age)) {
//     return "Hello there";
//   } else {
//     return "Hey kiddo";
//   }
// };

// console.log(greet(15));
// console.log(greet(60));

// // VAT calculations 1

const calculateVAT = function (basePrice, VATPercentage) {
  return basePrice * (VATPercentage / 100);
};

const calculatePriceIncludingVAT = function (basePrice, VATPercentage) {
  const VAT = calculateVAT(basePrice, VATPercentage);
  return basePrice + VAT;
};

console.log(calculatePriceIncludingVAT(1000, 21));
console.log(calculatePriceIncludingVAT(2, 9));

// VAT calculations 2
const calculateBasePrice = function (priceIncludingVAT, VATPercentage) {
  const basePrice = priceIncludingVAT / (1 + VATPercentage / 100);
  return basePrice;
};

const calculateBasePriceAndVAT = function (priceIncludingVAT, VATPercentage) {
  const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
  const VAT = priceIncludingVAT - basePrice;
  return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21));
console.log(calculateBasePriceAndVAT(2.18, 9));
