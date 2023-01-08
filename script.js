var x = 3;
var y = 6;

var result = y - x;
console.log ( result );

let name1 = "Gertie";
let name2 = "Sandi";

if (name1.length > name2.length) {
    console.log(name1 + " is longer than " + name2 + " by " + (name1.length - name2.length) + " characters.");
  } else if (name2.length > name1.length) {
    console.log(name2 + " is longer than " + name1 + " by " + (name2.length - name1.length) + " characters.");
  } else {
    console.log(name1 + " and " + name2 + " have the same length.");
  }
let userInput = prompt("Enter some text:");

  if (userInput === userInput.toUpperCase()) {
    console.log("You are shouting.");
  } else if (userInput === userInput.toLowerCase()) {
    console.log("You are whispering.");
  } else {
    console.log("You are talking normally.");
  }

  function add(x, y) {
    return x + y;
  }
  
  function subtract(x, y) {
    return x - y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function divide(x, y) {
    return x / y;
  }


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
  