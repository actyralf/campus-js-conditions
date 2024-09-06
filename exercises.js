// Exercise 1
// Determine whether a number is greater than 10

// Write a script that stores a number in a variable.
// Use an `if-else` statement to check if the number is greater than 10.
// If it is, print `"The number is greater than 10"`.
// Otherwise, print `"The number is not greater than 10"`.

let number = 7;

if (number > 10) {
  console.log("The number is greater than 10");
} else {
  console.log("The number is not greater than 10");
}

// Exercise 2
// Even or odd

// Use an if-else statement to check if the number is even (Hint: use the modulus operator %).
// If it is even, print "The number is even".
// If it is odd, print "The number is odd".

if (number % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

// Exercise 3
// Age Verification

// Store an age in a variable.
// Use an if-else statement to check if the age is 18 or older.
// If it is, print "You are old enough to drive".
// Otherwise, print "You are not old enough to drive".

const age = 22;

// write your code here

// Exercise 4
// Grading System

// Store a score in a variable (a number between 0 and 100).
// Use if-else statements to assign and print a grade based on the following criteria:
// 90 and above: "A"
// 80 to 89: "B"
// 70 to 79: "C"
// 60 to 69: "D"
// Below 60: "F"

const score = 74;

// write your code here

// Exercise 5
// Compare two numbers and determine their relationship

// Store two numbers in separate variables.
// Use if-else statements to compare them:
// If the first number is greater, print "The first number is greater".
// If the second number is greater, print "The second number is greater".
// If they are equal, print "Both numbers are equal".

const number1 = 42;
const number2 = 33;

// write your code here

// Exercise 6
// Day of the Week

// Store a number between 1 and 7 in a variable.
// Use a switch statement to print the corresponding day of the week:
// 1: "Monday"
// 2: "Tuesday"
// 3: "Wednesday"
// 4: "Thursday"
// 5: "Friday"
// 6: "Saturday"
// 7: "Sunday"

const dayNumber = 4;

// write your code here

// Exercise 7
// Pluralization

// Store a count in a variable.
// Use a ternary operator to determine if the word "apple" should be plural or singular.
// Print "1 apple" if the count is 1, and "X apples" (where X is the count) otherwise.

const count = 4;

// write your code here

// Exercise 8
// Leap year

// Store a year in a variable.
// Use a ternary operator to check if the year is a leap year (Hint: A year is a leap year if it is divisible by 4, but not divisible by 100, unless it is also divisible by 400).
// The ternary operator above should create the value for a boolean variable isLeapYear.
// Print the value of isLeapYear (should be true or false)

const year = 2024;

const isLeapYear = false; // Replace this with the ternary operator

console.log("isLeapYear:", isLeapYear);

// Exercise 8
// Default Value with Falsy Check

// Store a value for a user name in a variable input. This value can be any string (including empty strings) or undefined or null.
// Create a new variable userName and assign it the value of input if input is truthy. Otherwise assign it the value "anonymous user"
// Print the resulting value.

const input = undefined;

const userName = ""; // replace this with your ternary operator

console.log(userName);
