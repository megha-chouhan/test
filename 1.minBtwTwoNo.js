//2. Write a javascript program using function to find minimum between three numbers.
// function miniBtwTwoNo(num1, num2) {
//   if (num1 < num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }
// let number1 = 200;
// let number2 = 897;
// let answer = miniBtwTwoNo(number1, number2);
// console.log(`min btw ${number1} and ${number2} is :- `, answer);

let miniBtwTwoNo = (num1, num2) => {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
};
let number1 = 6789;
let number2 = 6783;
let answer = miniBtwTwoNo(number1, number2);
console.log(`min btw ${number1} and ${number2} is = `, answer);
