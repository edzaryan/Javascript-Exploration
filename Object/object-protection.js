
const car = {
    type:"Fiat", 
    model:"500", 
    color:"white"
};

// Object.preventExtensions(car);

// car.weight = 2300;

// console.log(car.weight);
// Outout: undefined

// if (Object.isExtensible(car)) {
//     car.weight = 2300;
// }

// console.log(car);

Object.seal(car);

if (!Object.isSealed(car)) {
    car.weight = 2300;
}

console.log(car);

// Object.freeze(car);

// if (!Object.isFrozen(car)) {
//     car.model = "Mercedes";
// }

// console.log(car);