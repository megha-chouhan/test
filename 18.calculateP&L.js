//18. Write a javascript program using function to calculate profit or loss.
// function profitOrLoss(costPrice, sellingPrice) {
//   if (sellingPrice == costPrice) {
//     return "No profit nor Loss";
//   } else if (sellingPrice > costPrice) {
//     return " Profit ";
//   } else {
//     return " Loss ";
//   }
// }

// let costPrice = 1500;
// let sellingPrice = 2000;
// let result = profitOrLoss(costPrice, sellingPrice);
// console.log("result - ", result);

let profitOrLoss = (costPrice, sellingPrice) => {
  if (sellingPrice == costPrice) {
    return "No profit nor Loss";
  } else if (sellingPrice > costPrice) {
    return " Profit ";
  } else {
    return " Loss ";
  }
};

let costPrice = 1500;
let sellingPrice = 2000;
let result = profitOrLoss(costPrice, sellingPrice);
console.log("result - ", result);
