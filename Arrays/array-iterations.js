
// --------------------------------------------------------------------------
// *** Array forEach() method ***

// const numbers = [45, 4, 9, 16, 25];

// numbers.forEach(function(value, index, array) {
//     array[index] = value * 2;
// });

// console.log(numbers);


// --------------------------------------------------------------------------
// *** Array map() method ***

// const numbers = [45, 4, 9, 16, 25];

// // .map() creates a new array by performing a function on each array element
// const new_numbers = numbers.map((value, index, array) => value * 2);

// console.log(new_numbers);


// --------------------------------------------------------------------------
// *** Array filter() method ***

// const numbers = [45, 4, 9, 16, 25, 64, 49, 100, 36];
// const over18 = numbers.filter((value, index, array) => value > 18);

// console.log(over18);

// --------------------------------------------------------------------------
// *** Array reduce() method ***

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce((total, value, index, array) => total + value, 100);

// console.log(sum);

// --------------------------------------------------------------------------
// *** Array reduceRight() method ***

// const letters = ["a", "b", "c"];

// const left = letters.reduce((acc, val) => acc + val);
// const right = letters.reduceRight((acc, val) => acc + val);

// console.log(left);  // "abc"
// console.log(right); // "cba"

// --------------------------------------------------------------------------
// *** Array some() method ***

// const numbers = [45, 4, 9, 16, 25];
// let someOver18 = numbers.some((value, index, array) => value > 18);

// console.log(someOver18);
// // Output: true

// --------------------------------------------------------------------------
// *** Array .from() method ***

// const str = "12345";
// const nums = Array.from(str, ch => Number(ch) * 2);

// console.log(nums);

// --------------------------------------------------------------------------
// *** Array .keys() method ***

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// for (let key of keys) {
//     console.log(key);
// }

// --------------------------------------------------------------------------
// *** Array entries() method ***

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
//     console.log(x);
// }

// --------------------------------------------------------------------------
// *** Array with() method ***

// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(2, "March");

// console.log(myMonths);

// --------------------------------------------------------------------------
// *** Array Spread (...) method ***

// Example 1
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// // Example 2
// const arr4 = [1, 2, ...[3, 4], 5];
// console.log(arr4);

// // Example 3
// const arr5 = [1, 2];

// // Create a shallow copy of arr5
// const arr6 = [...arr5];

// console.log(arr6);

// // Example 4
// const numbers = [23,55,21,87,56];
// let minValue = Math.min(...numbers);
// let maxValue = Math.max(...numbers);

// console.log("Min:", minValue);
// console.log("Max:", maxValue);

// --------------------------------------------------------------------------
// *** Array rest() method ***

// let a, rest;
// const arr1 = [1,2,3,4,5,6,7,8];

// [a, b, caches, ...rest] = arr1;


// console.log(a);
// console.log(b);
// console.log(caches);
// console.log(rest);
