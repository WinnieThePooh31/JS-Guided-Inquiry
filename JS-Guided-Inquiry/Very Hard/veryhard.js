//very hard//
let num1 = parseInt(prompt("Enter a number:"));
let operator = prompt("Enter an operator (+, -, *, or /):");
let num2 = parseInt(prompt("Enter another number:"));
  


if (operator === "+") {
  result = add(num1, num2);
} else if (operator === "-") {
  result = subtract(num1, num2);
} else if (operator === "*") {
  result = multiply(num1, num2);
} else if (operator === "/") {
  result = divide(num1, num2);
}

console.log("The result of " + num1 + " " + operator + " " + num2 + " is " + result + ".");
