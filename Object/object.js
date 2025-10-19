
// --------------------------------------------------------------------------
// *** Creating An Object ***

// Style 1: Object literal - recommended way
const building = {
    buildingNumber: 42,
    street: "Main St",
    city: "Metropolis",
    country: "Fictionland",
    floors: 9,

    // Nested Object
    cars: {
        car1: "Toyota",
        car2: "Honda",
        car3: "Ford"
    },

    // Array 
    tenants: ["Alice", "Bob", "Charlie"],

    getAddress: function() {
        return `${this.buildingNumber} ${this.street}, ${this.city}, ${this.country}`;
    }
}

// MODIFYING PROPERTIES
building.floors = 12;
building["floors"] = 15;

let property = "city";
building[property] = "Gotham";

// ADDING A NEW PROPERTY
building.height = 200;

// DELETING A PROPERTY
delete building.country;
delete building["height"];

let address = building.getAddress();
console.log(address);

console.log(building.cars.car2);
console.log(building.cars["car2"]);
console.log(building["cars"].car2);
console.log(building["cars"]["car2"]);
let c1 = "cars", c2 = "car2";
console.log(building[c1][c2]);

console.log(building);

// // Style 2: Using the Object constructor
// const car_1 = new Object();
// car_1.make = "Toyota";
// car_1.model = "Corolla";
// car_1.year = 2020;

// const car_2 = new Object({
//     make: "Honda",
//     model: "Civic",
//     year: 2021
// });

// --------------------------------------------------------------------------
// *** Object Constructor Function ***

// function Person(first, last, age) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.nationality = "English";
// }

// const karen = new Person("Karen", "Smith", 30);
// console.log(karen.firstName);
// console.log(karen.nationality);

// const joe = new Person("Joe", "Doe", 25);
// console.log(joe.age);


// --------------------------------------------------------------------------
// *** Object.create() Function ***

// const person = {
//     firstName: "John",
//     lastName: "Doe",
// }

// const man = Object.create(person);
// man.firstName = "Mike";

// console.log(man.lastName); 
// // Output: Doe

// --------------------------------------------------------------------------
// *** Object.fromEntries() Function ***

// const fruits = [
//     ["apples", 300],
//     ["pears", 900],
//     ["bananas", 500]
// ];

// const myObj = Object.fromEntries(fruits);

// console.log(myObj);

// --------------------------------------------------------------------------
// *** Object.assign() Function ***

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// // Create Source Object
// const person2 = { 
//     firstName: "Anne",
//     lastName: "Smith",
//     height: 156
// };

// // Assign Source to Target
// Object.assign(person1, person2);

// console.log(person1);

// --------------------------------------------------------------------------
// *** Objects are Mutable ***

// const person = {
//     firstName: "John",
// }

// const anotherPerson = person;
// anotherPerson.firstName = "Jane";

// console.log(person.firstName);