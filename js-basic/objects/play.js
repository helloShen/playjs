function MyConstructor() {}

/* MyConstructor is a constructor function.
 * MyConstructor.__proto__ is its prototype, MyConstructor.prototype is not. */
MyConstructor.prototype = {
    name: "Jay",
    sayHi: function() { console.log("Hello World!"); }
}

/* myObject is constructed by MyConstructor.
 * So MyConstructor.prototype gets saved to myObject.__proto__ */
myObject = new MyConstructor();

/* The following two will be the same */
console.log(MyConstructor.__proto__);
console.log(MyConstructor.prototype);
console.log(myObject.__proto__);


console.log(funcAdd(1,2));
// A function defined using lambda syntax CANNOT be called before definition.
// console.log(add(1,2));

const add = (x, y) => x + y;

function funcAdd(x, y) {
    return x + y;
}


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = (read)? 'already read' : 'not read yet';
    this.info = () => {console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)};
}

theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
theHobbit.info();


let animal = {
    eats: true
}

let rabbit = {
    jumps: true
}

rabbit.__proto__ = animal;

console.log(`Does rabbit eat? ${rabbit.eats}`);

let head = {
    glasses: 1
};
  
let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

function Apple(color, weight) {
    this.color = color;
    this.weight = weight;
}

Apple.prototype.eat = function() {
    this.weight *= 0.9;
}
console.dir(Apple);

const redApple = new Apple('red', 10);
redApple.eat();
console.dir(redApple.__proto__);

const greenApple = Object.create(Apple.prototype);
console.dir(greenApple);

const Car = function(color) {
    this.color = color;
}

const myCar = new Car('red');

function C() {}
console.log(C);
C.prototype = { prototype_prop: "new proto"};
console.log(C);
const c = new C();
console.log(c);

const counter = () => {
    let count = 0;
    return () => {
        return ++count;
    };
}

const myCounter = counter();
for (let i = 0; i < 10; i++) console.log(myCounter());

/* closure makes the private properties invisible */
const Person = (name) => {
    const sayHello = () => { console.log(`Hello, my name is ${name}!`) };
    return { sayHello };
};

const peter = Person('Peter');
peter.sayHello();

/* inheritance */
const Player = (name, game) => {
    const { sayHello } = Person(name);
    const play = () => { console.log(`I love to play ${game}!`)};
    return { sayHello, play };
};

/* the module pattern */
const Nerd = (() => {
    const doSomethingNerdy = () => { console.log('Nerdy stuff.') };
    return { doSomethingNerdy };
})();


const jay = Player('Jay', 'basketball');

jay.sayHello();
jay.play();
const nerdJay = Object.assign(jay, Nerd);
nerdJay.sayHello();
nerdJay.play();
nerdJay.doSomethingNerdy();


const foo = (() => {
    function bar() {
        this.a = 'hello';
    }
    function getA() {
        return this.a;
    }
    return { bar, getA };
})();

foo.bar();
console.log(foo.getA());


const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 });
console.log(original);

