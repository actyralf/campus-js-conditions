const isMarried = true;

// if (condition){
// // .. do something
// }else{
// // .. do something else
// }

//              Expression
let condition = isMarried === true;

if (condition) {
  console.log("You are married!");
  console.log("---------------");
} else {
  console.log("---------------");
  console.log("You are single!");
}

const numChildren = 0;

if (numChildren > 0) {
  console.log("You have children");
} else {
  console.log("You don't have children");
}

const a = "4";
const b = 4;

console.log("a", typeof a);
console.log("b", typeof b);

const numberA = Number(a);
const stringB = b.toString();
console.log("numberA", numberA, typeof numberA);
console.log("stringB", stringB, typeof stringB);

if (a <= b) {
  console.log("The numbers are equal");
} else {
  console.log("The numbers are not equal");
}

// comparison operators: ==, ===, >, <, >=, <=, !==

// logical operators

const name1 = "Horst";
const name2 = "Ralf";

if (name1 === name2) {
  console.log("The names are identical");
} else {
  console.log("The names are NOT identical");
}

// && AND operator, || OR operator, ! NOT operator

const x = 15;

if (x > 0 && x <= 10) {
  console.log("The number is in the range");
} else {
  console.log("The number is outside the range");
}

const hobby = "football";

if (!(hobby === "football") && !(hobby === "tennis")) {
  console.log("You don't like sports");
} else {
  console.log("You like sports");
}

if (!isMarried) {
  console.log("You are a single");
}

// truthy / falsy

// falsy:

// undefined, null, NaN, 0, "", false

const userName = "Ralf";

if (userName) {
  console.log("You are logged in");
} else {
  console.log("Error: You must enter a username");
}
