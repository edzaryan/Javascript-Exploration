
const person = {
    firstName: "John",
    lastName: "Smith",
    country: "US"
}

// const { firstName, lastName = "Anderson" } = person;
const { 
    firstName: name, 
    lastName: surname = "Anderson" 
} = person;

console.log(name, surname);