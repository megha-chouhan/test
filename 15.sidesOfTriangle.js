// 15. Write a javascript program using function to input all sides of a triangle and check whether triangle is valid or not.
// function sidesOfTriangle(a, b, c) {
//   if (a + b < c) {
//     return "valid triangle";
//   } else if (a + c < b) {
//     return "valid triangle";
//   } else if (b + c < a) {
//     return "valid triangle";
//   } else {
//     return "not a vaild triangle";
//   }
// }
// let a = 10;
// let b = 110;
// let c = 50;
// let answer = sidesOfTriangle(a, b, c);
// console.log("input all sides of a triangle = ", answer);

let sidesOfTriangle = (a, b, c) => {
  if (a + b < c || a + c < b || b + c < a) {
    return "valid triangle";
  } else {
    return "not a vaild triangle";
  }
};
let a = 10;
let b = 110;
let c = 50;
let answer = sidesOfTriangle(a, b, c);
console.log("input all sides of a triangle = ", answer);
