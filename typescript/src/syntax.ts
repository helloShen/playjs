interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Hayes",
  id: 0,
};

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const myAccount: User = new UserAccount("Shen", 1);

type MyBool = true | false;

function getLength(obj: string | string[]) {
  return obj.length;
}

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;
const obj = backpack.get();
backpack.add('23');

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`x: ${p.x}, y: ${p.y}`);
}

const p = {
  x: 12,
  y: 26,
}

logPoint(p); // duck typing


