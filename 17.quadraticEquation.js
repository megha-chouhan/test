//17. Write a javascript program using function to find all roots of a quadratic equation.

// function rootsOfQuadraticEquation(a, b, c) {
//   let root1, root2, discriminant;
//   discriminant = b * b - 4 * a * c;

//   if (discriminant > 0) {
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//     return [root1, root2];
//   } else if (discriminant == 0) {
//     root1 = -b / (2 * a);
//     return [root1];
//   } else {
//     return [];
//   }
// }
// let a = 1;
// let b = 6;
// let c = 5;
// let answer = rootsOfQuadraticEquation(a, b, c);
// console.log("roots of quadratic equation = ", answer);

let rootsOfQuadraticEquation = (a, b, c) => {
  let root1, root2, discriminant;
  discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  } else if (discriminant == 0) {
    root1 = -b / (2 * a);
    return [root1];
  } else {
    return [];
  }
};
let a = 1;
let b = 6;
let c = 5;
let answer = rootsOfQuadraticEquation(a, b, c);
console.log("roots of quadratic equation = ", answer);
