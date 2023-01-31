//16. Write a javascript program using function to check whether the triangle is equilateral, isosceles or scalene triangle.

// function checkTriangleType(a, b, c) {
//   if (a === b && b === c) {
//     return "Equilateral";
//   } else if (a === b || b === c || c === a) {
//     return "Isosceles";
//   } else {
//     return "Scalene";
//   }
// }

// const result = checkTriangleType(2, 1, 2);
// console.log(result);

let checkTriangleType = (a, b, c) => {
  if (a === b && b === c) {
    return "Equilateral";
  } else if (a === b || b === c || c === a) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
};

const result = checkTriangleType(2, 1, 2);
console.log(result);
