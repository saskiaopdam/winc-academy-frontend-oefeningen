// Hey kiddo

const isAdult = function (age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

const greet = function (age) {
  isAdult(age);
};

greet(20);

// VAT calculations 1

const calcVatAmount = function (basePrice, vatPercentage) {
  const vatAmount = (basePrice * vatPercentage) / 100;
  return vatAmount;
};
const calcPriceIncludingVat = function (basePrice, vatPercentage) {
  const priceIncludingVat = basePrice + vatAmount;
};

calcPriceIncludingVat(1000, 21);

// VAT calculation 2
