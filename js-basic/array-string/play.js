/* playground */
let a = 'hello';
let b = 'hello';

/* invoke a outside function in console.log */
let check = (x, y) => { return a === b; }
console.log(check(a, b));

/* invoke the anonymous function directly in console.log */
console.log(((x, y) => { return x === y; })(a, b));

(() => {
    const foo = [1, 2, 3];
    const bar = (x) => x * 2;
    console.log(foo.map(bar));
})();

(() => {
})();
