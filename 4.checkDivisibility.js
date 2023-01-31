// 4. Write a javascript program using function to check whether a number is divisible by 5 and 11 or not.
// function divisibleBy(num) {
//   if (num % 5 == 0) {
//     return "divisible by 5 ";
//   } else if (num % 11 == 0) {
//     return "divisible by 11";
//   } else {
//     return "not divisible";
//   }
// }
// let answer = divisibleBy(23);
// console.log("answer = ", answer);

let divisibleBy = (num) => {
  if (num % 5 == 0) {
    return "divisible by 5 ";
  } else if (num % 11 == 0) {
    return "divisible by 11";
  } else {
    return "not divisible";
  }
};
let answer = divisibleBy(121);
console.log("answer = ", answer);
