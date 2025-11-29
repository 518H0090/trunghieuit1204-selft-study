// Data Type and Check Type

let counter = 120;
console.log(typeof counter);

counter = false;
console.log(typeof counter);

counter = "foo";
console.log(typeof counter);

let variableUndefined;
console.log(variableUndefined);
console.log(typeof variableUndefined);
console.log(typeof undeclareVar);

let obj = null;
// The typeof null returns object is a known bug in JavaScript. A proposal to fix was rejected due to the potential to break many existing sites.
console.log(typeof obj);

console.log(null == undefined);

// Number type
let num = 100;

let price = 12.5;
let discount = 0.05;

console.log(Number.MAX_VALUE + Number.MAX_VALUE);
console.log(-Number.MAX_VALUE - Number.MAX_VALUE);
console.log(Number.MAX_VALUE - Number.MIN_VALUE);

console.log("a" / 2);
console.log(NaN / 2);
console.log(NaN / NaN);

let greeting = "Hi";
let message = "Bye";

let str = "Javascript";
str += " String";
console.log(str);

let s = "JavaScript";
s[2] = "j";
console.log(s);

console.log(Boolean("Hi"));
console.log(Boolean(""));
console.log(Boolean(20));
console.log(Boolean(Infinity));
console.log(Boolean(0));
console.log(Boolean({ foo: 100 }));
console.log(Boolean(null));

let s1 = Symbol();
console.log(Symbol() == Symbol());

let pageView = 9007199254740991n;
console.log(typeof pageView);

let emptyObject = {};

let contact = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "(408)-555-9999",
  address: {
    building: "4000",
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};

console.log(contact.firstName);
console.log(contact.lastName);
console.log(contact.age);
console.log(contact["phone"]);
console.log(contact["email"]);

const budget = 1_000_000_000;
let amount = 120_201_123.05;
let expense = 123_450;
let fee = 12345_00;

console.log(budget, amount, expense, fee);
