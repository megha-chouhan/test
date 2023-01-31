// Write a javascript program using function to check whether a number is negative, positive or zero.
// function checkNo(num) {
//   if (num > 0) {
//     console.log("inside condition 1");
//     return "positive";
//   } else if (num == 0) {
//     console.log("inside condition 2");

//     return "zero";
//   } else if (num < 0) {
//     console.log("inside condition 3");
//     return "negative";
//   }
// }

// let number1 = 345;
// let number2 = -98;
// let number3 = 0;
// let answer1 = checkNo(number1);
// let answer2 = checkNo(number2);
// let answer3 = checkNo(number3);
// console.log(`check number ${number1} is - `, answer1);
// console.log(`check number ${number} is - `, answer2);
// console.log(`check number ${number3}is - `, answer3);

let checkNo = (num) => {
  if (num > 0) {
    console.log("inside condition 1");
    return "positive";
  } else if (num == 0) {
    console.log("inside condition 2");

    return "zero";
  } else if (num < 0) {
    console.log("inside condition 3");
    return "negative";
  }
};

let number1 = 345;
let number2 = -98;
let number3 = 0;
let answer1 = checkNo(number1);
let answer2 = checkNo(number2);
let answer3 = checkNo(number3);
console.log(`check number ${number1} is - `, answer1);
console.log(`check number ${number} is - `, answer2);
console.log(`check number ${number3}is - `, answer3);
