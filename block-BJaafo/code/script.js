function fullName(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;
  return fullName;
}

let result = FullName("Sumit", "Thapa");

let expected = "Sumit Thapa";

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

let final = getFullName("Sumit", "Thapa");

let expected = "SumitThapa";

let final = FullName("Sumit", "Thapa");
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

function totalAmount(amount, taxRate) {
  let totalAmt = amount + amount * taxRate;
}

