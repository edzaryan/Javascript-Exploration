
// *** Display The Object ***

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }

// let text = person.name + " " + person.age + " " + person.city;

// let text = "";

// for (let x in person) {
//     text += person[x] + " ";
// }

// console.log(text);

// --------------------------------------------------------------------------
// *** Display Object.values() ***

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     favFoods: ["Banana", "Apple", "Pear"]
// }

// console.log(Object.values(person));
// console.log(Object.values(person).toString());

// --------------------------------------------------------------------------
// *** Display Object.entries() ***

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     favFoods: ["Banana", "Apple", "Pear"]
// }

// console.log(Object.entries(person));

// for (let [prop, value] of Object.entries(person)) {
//   console.log(prop, "-", value);
// }

// --------------------------------------------------------------------------
// *** Display JSON.stringify() ***

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     favFoods: ["Banana", "Apple", "Pear"]
// }

// console.log(JSON.stringify(person));