"use strict";
console.log("Hello, world!");

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date}!`);
}
 
greet("Brendan", new Date());