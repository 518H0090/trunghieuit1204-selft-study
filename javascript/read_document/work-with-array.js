let scores = new Array(1, 2, 3, 4, 5, 6, 7, 8);
console.log(scores);

let artists = Array();
console.log(artists);

let arrayName = ["Hello", "World", "For", "Javascript"];
console.log(arrayName);

let mountains = ["Everest", "Fuji", "Naga Parbat"];
console.log(mountains[1]);
console.log(mountains);
mountains[2] = "Nobu Naga";
console.log(mountains);

console.log(arrayName.length);

let seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
seas.push("Red Sea");
console.log(seas);

seas.unshift("Purple Sea");
console.log(seas);

const lastElement = seas.pop();
console.log("Remove element : " + lastElement);
console.log(seas);

const firstElement = seas.shift();
console.log("Remove element : " + firstElement);
console.log(seas);

let index = seas.indexOf("North Sea");
console.log(index);

console.log(Array.isArray(seas));
