/* basic syntax */
function greeter(fn: (a: string) => void) {
  fn("Hello, world!");
}

/* generics */
function map<Input, Output>(arr: Input[], fn: (ele: Input) => Output) {
  return arr.map(fn);
}

function combine<Type>(arr1: Type[], arr2: Type[]) {
  return arr1.concat(arr2);
}
const arr = combine<string | number>([1, 2, 3], 'hello');

function firstElement<Type>(arr: Type[]) {
  return arr[0];
}

function f(n?: number) {
  console.log(n.toFixed());
  console.log(n.toFixed(3));
}

/* overload */
function makeDate(timestanmp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

/* destructuring */
function sum({a, b, c}: {a: number, b: number, c: number}): number {
  return a + b + c;
}





