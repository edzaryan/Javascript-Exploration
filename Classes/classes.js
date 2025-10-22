
class Car {
  constructor(name, year) {
    this._name = name;
    this._year = year;
  }

  age(currentYear) {
    return currentYear - this._year;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    this._year = value;
  }

  present() {
    return "I have a " + this._name + " " + this._year;
  }

  static hello(car) {
    return car.name + " " + car.brand + " " + car.year;
  }
}

class Model extends Car {
    constructor(brand, name, year) {
        super(name, year);
        this._brand = brand;
    }

    show() {
        return this.present() + " " + this._brand;
    }

    get brand() {
        return this._brand;
    }

    set brand(x) {
        this._brand = x;
    }
}

const myCar1 = new Model("Ford", "bo", 2014);

// console.log(myCar1.age());
// console.log(myCar1.age(new Date().getFullYear()));

myCar1.brand = "BMW";
console.log(myCar1.brand);

console.log(Model.hello(myCar1));