// 1. Write a javascript program using function to find maximum between two numbers.
// function maxBtwTwoNo(num1, num2) {
//   if (num1 > num2) {
//     return "num1";
//   } else {
//     return "num2";
//   }
// }
// let number1 = 47;
// let number2 = 76;
// let answer = maxBtwTwoNo(number1, number2);
// console.log(`max bw ${number1} and${number2} is :`, answer);

let maxBtwTwono = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
let number1 = 678;
let number2 = 688;
let answer = maxBtwTwono(number1, number2);
console.log(`max bw ${number1} and ${number2} is =`, answer);
