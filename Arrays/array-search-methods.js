
// --------------------------------------------------------------------------
// *** Array indexOf() and lastIndexOf() method ***

// const fruits = ["Apple", "Orange", "Apple", "Mango", "Banana", "Apple", undefined, NaN];

// let position = fruits.indexOf("Apple", 3);
// console.log(position);

// position = fruits.indexOf("Mango1");
// console.log(position);
// // Output: -1 (not found)

// position = fruits.lastIndexOf("Apple", -2);
// console.log(position);

// position = fruits.indexOf(undefined);
// console.log(position);

// position = fruits.indexOf(NaN);
// console.log(position);
// Output: -1 (not found)

// --------------------------------------------------------------------------
// *** Array includes() method ***

// const fruits = ["Apple", "Orange", "Apple", "Mango", "Banana", undefined, NaN, "Apple"];

// let hasNaN = fruits.includes(NaN);
// console.log(hasNaN);
// // Output: true

// let hasUndefined = fruits.includes(undefined);
// console.log(hasUndefined);
// // Output: true

// --------------------------------------------------------------------------
// *** Array find() method ***

// const numbers = [4, 9, 16, 25, 29];

// let first = numbers.find(function (value, index, array) { 
//     return value > 18 
// });

// console.log(first);
// Output: 25

// --------------------------------------------------------------------------
// *** Array findIndex() method ***

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(function (value, index, array) {
//     return value > 18
// });

// console.log(first);
// Output: 3

// --------------------------------------------------------------------------
// *** Array findLast() method ***

// const numbers = [4, 9, 16, 25, 29];

// let first = numbers.findLast(function (value, index, array) { 
//     return value > 25 
// });

// console.log(first);

// --------------------------------------------------------------------------
// *** Array findLastIndex() method ***

// const numbers = [4, 9, 16, 25, 29];

// let first = numbers.findLastIndex(function (value, index, array) { 
//     return value > 25 
// });

// console.log(first);