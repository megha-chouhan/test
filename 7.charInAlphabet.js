// 7. Write a javascript program using function to check whether a character is alphabet or not.

function isLetter(str) {
  return /[a-zA-Z]/.test(char);
}

let char = "B";
let answer = isLetter(char);
console.log("answer = ", answer);

console.log(char.toLowerCase());
console.log(char.toUpperCase());
