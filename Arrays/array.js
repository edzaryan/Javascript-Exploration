
// const cars = ["Saab", "Volvo", "BMW", "Mercedes", "Audi"];

/*
console.log(cars);

console.log(cars.length);

cars.length = 2;

console.log(cars);
*/

// cars[10] = "Toyota";

// console.log(cars[8] === undefined);
// console.log(cars);

// console.log(cars[2] === cars.at(2));
// Output: true

// console.log(cars[cars.length - 1] === cars.at(-1));
// Output: true

// console.log(cars.at(-100));
// Output: undefined

// --------------------------------------------------------------------------
// *** Array toString() method ***

// let myList = cars.toString();
// console.log(myList);

// --------------------------------------------------------------------------
// *** Array join() method ***

// let cars = ["Saab", "Volvo", "BMW", "Mercedes", "Audi"];
// let myList = cars.join(", ");
// console.log(myList);

// --------------------------------------------------------------------------
// *** Array pop() method ***

// let cars = ["Saab", "Volvo", "BMW", "Mercedes", "Audi"];

// let removedCar = cars.pop();
// console.log(removedCar);

// cars.pop();
// console.log(cars);

// --------------------------------------------------------------------------
// *** Array push() method ***

// let cars = ["Saab", "Volvo", "BMW", "Mercedes", "Audi"];

// let newCar = cars.push("Toyota");
// console.log(newCar);
// // Output: 6 (the new array length)

// --------------------------------------------------------------------------
// *** Array shift() method ***

// let cars = ["Saab", "Volvo", "BMW", "Mercedes", "Audi"];

// let removedCar = cars.shift();
// console.log(removedCar);

// cars.shift();
// console.log(cars);

// --------------------------------------------------------------------------
// *** Array unshift() method ***

// let cars = ["Saab", "Volvo", "BMW", "Mercedes", "Audi"];

// let newCar = cars.unshift("Toyota");
// console.log(newCar);
// // Output: 6 (the new array length)

// console.log(cars);

// --------------------------------------------------------------------------
// *** Update Array Elements ***

// let cars = ["Saab", "Volvo", "BMW", "Mercedes", "Audi"];
// cars[0] = "Opel";

// console.log(cars);

// cars[cars.length - 1] = "Kia";

// cars[cars.length] = "Toyota";

// console.log(cars);

// --------------------------------------------------------------------------
// *** Delete Array Elements ***

// let cars = ["Saab", "Volvo", "BMW", "Mercedes", "Audi"];
// delete cars[0];

// console.log(cars[0]);
// // Output: undefined

// ---------------------------------------------------------------------------
// *** Array concat() method ***

// let cars1 = ["Saab", "Volvo"];
// let cars2 = ["BMW", "Mercedes", "Audi"];
// let cars3 = ["Kia", "Toyota"];

// let newCars = cars1.concat(cars2, cars3).concat("Honda");

// console.log(newCars);

// ---------------------------------------------------------------------------
// *** Array copyWithin() method ***

// let cars = ["Saab", "Volvo", "BMW", "Mercedes", "Audi", "Kia", "Toyota", "Honda"];
// cars.copyWithin(0, 1, 3);

// console.log(cars);


// ---------------------------------------------------------------------------
// *** Array flat() method ***

// let numberArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, [20, 30]]];
// let flatArr = numberArr.flat();

// console.log(flatArr);

// ---------------------------------------------------------------------------
// *** Array flatMap() method ***

// const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newNumberArr = numberArr.flatMap(num => [num, num * 2]);

// console.log(newNumberArr);

// ---------------------------------------------------------------------------
// *** Array splice() method ***

// let cars = ["Saab", "Volvo", "BMW", "Mercedes", "Audi", "Kia", "Toyota", "Honda"];
// cars.splice(3, 2, "Toyota", "Kia");
// cars.splice(0, 2);

// console.log(cars);

// ---------------------------------------------------------------------------
// *** Array toSpliced() method ***

// let cars = ["Saab", "Volvo", "BMW", "Mercedes", "Audi"];
// // A new array
// const spliced = cars.toSpliced(0, 1);
// console.log(spliced);

// ---------------------------------------------------------------------------
// *** Array slice() method ***

// let cars = ["Saab", "Volvo", "BMW", "Mercedes", "Audi"];

// let newCar1 = cars.slice(2);
// let newCar2 = cars.slice(1, 4);

// console.log(newCar1);
// console.log(newCar2);








