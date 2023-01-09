//medium//

let userInput = prompt("Enter some text:");

  if (userInput === userInput.toUpperCase()) {
    console.log("You are shouting.");
  } else if (userInput === userInput.toLowerCase()) {
    console.log("You are whispering.");
  } else {
    console.log("You are talking normally.");
  }