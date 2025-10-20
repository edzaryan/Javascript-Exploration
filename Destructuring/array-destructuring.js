
// *** Destructuring Array ***

const fruits = ["apple", "banana", "cherry", "pear", "grape", "orange"];

const [fruits1,, fruits2] = fruits;

console.log(fruits1); // Output: apple
console.log(fruits2); // Output: cherry

const { [0]: firstFruit, [3]: fourthFruit } = fruits;

console.log(firstFruit);
console.log(fourthFruit);

const [f1, f2, ...rest] = fruits;

console.log(rest); // Output: [ 'cherry', 'pear', 'grape', 'orange' ]

// ---------------------------------------------------------------------------
// *** Swapping Variable Values ***

let firstName = "John";
let lastName = "Doe";

// Destructuring
[firstName, lastName] = [lastName, firstName];

console.log(firstName); // Output: Doe
console.log(lastName);  // Output: John