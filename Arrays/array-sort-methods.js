
// --------------------------------------------------------------------------
// *** Array sort() method ***

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();

// console.log(fruits);

// const fruits1 = ["Banana", "Orange", "Apple", "Mango", "kiwi", "cherry", "pineapple"];
// fruits1.sort(function(a, b){
//   let x = a.toLowerCase();
//   let y = b.toLowerCase();
//   if (x < y) {return -1;}
//   if (x > y) {return 1;}
//   return 0;
// });

// console.log(fruits1);

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b);
// // or
// points.sort((a, b) => b - a);

// But this is not a reliable way to sort an array randomly
// points.sort(() => 0.5 - Math.random());
// console.log(points);

// A reliable way to shuffle an array randomly (Fisher-Yates Shuffle Algorithm)
// for (let i = points.length; i--; ) {
//   const j = Math.floor(Math.random() * (i + 1));
//   [points[i], points[j]] = [points[j], points[i]];
// }

// console.log(points);


// --------------------------------------------------------------------------
// *** Array sort() method with objects ***

// const cars = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
//   { type: "BMW", year: 2010 },
// ];

// cars.sort((a, b) => a.year - b.year);
// console.log(cars);


// --------------------------------------------------------------------------
// *** Array reverse() method ***

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort().reverse();

// console.log(fruits);

// --------------------------------------------------------------------------
// *** Array custom toSorted() method ***

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // Using toSorted() to create a sorted copy of the original array
// const sortedFruits = fruits.toSorted();

// console.log(fruits);
// console.log(sortedFruits);


// --------------------------------------------------------------------------
// *** Array custom toReversed() method ***

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // Using toReversed() to create a reversed copy of the original array
// const reversedFruits = fruits.toReversed();

// console.log(fruits);
// console.log(reversedFruits);


// --------------------------------------------------------------------------
// *** Array getting MIN and MAX values ***

// const points = [40, 100, 1, 5, 25, 10];

// let min = Math.min(...points);
// let max = Math.max(...points);

// console.log("Min:", min);
// console.log("Max:", max);