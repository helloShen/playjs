/*
 * => adder is a function (also a value) declared by a function expression
 * => adder takes an argument x, returns an anonymous function that takes 
 * another argument y. 
 * => the inner anonymous function is returned with a reference to its 
 * surrounding states (which is x in this case).
 */
let adder = function(x) {
    return function(y) {
        return x + y;
    }
}

let add5 = adder(5);
console.log(add5(6)); // output: 11

/*
 * the same closure written in lambda(arrow) function 
 */
let multiplor = x => y => x * y;

let multi5 = multiplor(5);
console.log(multi5(6)); // output: 30