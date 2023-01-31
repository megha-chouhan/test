//10. Write a javascript program using function to check whether a character is uppercase or lowercase alphabet.

// function checkCase(char) {
//   if (char >= "a" && char <= "z") {
//     console.log(char.toLowerCase);

//     return "Lowercase";
//   } else if (char >= "A" && char <= "Z") {
//     console.log(char.toUpperCase());

//     return "Uppercase";
//   } else {
//     return "Not an alphabet";
//   }
// }

// let answer = checkCase("L");
// console.log("answer = ", answer);

let checkCase = (char) => {
  if (char >= "a" && char <= "z") {
    console.log(char.toLowerCase);

    return "Lowercase";
  } else if (char >= "A" && char <= "Z") {
    console.log(char.toUpperCase());

    return "Uppercase";
  } else {
    return "Not an alphabet";
  }
};

let answer = checkCase("L");
console.log("answer = ", answer);
