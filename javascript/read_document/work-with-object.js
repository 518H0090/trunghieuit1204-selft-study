let empty = {};

let person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person.firstName);
console.log(person["lastName"]);

let address = {
  "building no": 3960,
  street: "North 1st street",
  state: "CA",
  country: "USA",
};

console.log(address["building no"]);

person.firstName = "Jane";
console.log(person);

// Adding a new property
person.age = 25;
console.log(person);

// Deleting the property
delete person.age;
console.log(person.age);

// Check exist
let employee = {
  firstName: "Peter",
  lastName: "Doe",
  employeeId: 1,
};

console.log("ssn" in employee);
console.log("employeeId" in employee);
