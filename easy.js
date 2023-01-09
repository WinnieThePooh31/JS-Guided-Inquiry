//easy//
let name1 = "Gertie";
let name2 = "Sandi";

if (name1.length > name2.length) {
    console.log(name1 + " is longer than " + name2 + " by " + (name1.length - name2.length) + " characters.");
  } else if (name2.length > name1.length) {
    console.log(name2 + " is longer than " + name1 + " by " + (name2.length - name1.length) + " characters.");
  } else {
    console.log(name1 + " and " + name2 + " have the same length.");
  }