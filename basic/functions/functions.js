/* 
 * Task 1: bind an event listener to the textbox, and add it to the function.html
 */

// create textBox object
let textBox = document.createElement('INPUT');
textBox.setAttribute('type', 'text');

// define textBox event handler function
function keyLog(event) {
    console.log(`You pressed ${event.key}.`);
}
// three different ways to pass a function as a parameter
textBox.addEventListener('keydown', keyLog);                                                // traditional way
textBox.addEventListener('keydown', event => keyLog(event));                                // arrow function
textBox.addEventListener('keydown', event => {console.log(`You pressed ${event.key}.`);});  // anonymous function

// wrap the textBox within a <div> division
let divFunc = document.getElementById('functions');
divFunc.appendChild(textBox);


/*
 * Events
 */
let add7 = int_x => int_x + 7;

let multiply = (int_x, int_y) => int_x * int_y;

let capitalize = str_s => {
    if (!str_s) return str_s;
    return str_s[0].toUpperCase() + str_s.slice(1);
}

console.log(add7(5));   // output: 12
console.log(multiply(5,6));       // output: 30
console.log(capitalize("hello"));   // output: Hello

