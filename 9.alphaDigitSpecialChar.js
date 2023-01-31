//9. Write a javascript program using function to input any character and check whether it is alphabet, digit or special character.

// function checkCharacterType(char) {
//   if (/[a-zA-Z]/.test(char)) {
//     return "Alphabet";
//   } else if (!isNaN(char)) {
//     return "Digit";
//   } else {
//     return "Special Character";
//   }
// }
// let char = checkCharacterType("b ");
// console.log(`The entered character is a ${checkCharacterType(char)}.`);

let checkCharacterType = (char) => {
  if (/[a-zA-Z]/.test(char)) {
    return "Alphabet";
  } else if (!isNaN(char)) {
    return "Digit";
  } else {
    return "Special Character";
  }
};
let char = checkCharacterType("9");
console.log(`The entered character is a ${checkCharacterType(char)}.`);
