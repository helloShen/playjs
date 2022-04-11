import Box from './box.js';

class Button {
    #value;

    constructor(value) {
        this.#value = value;
    }

    click() {
        console.log(this.value);
    }
}

function Car(color) {
  this.color = color;
}

Car.prototype.run = function () {
  return `${this.color} flash!`;
}

function Bycicle(size) {
  const proto = {
    size,
  };
  function getSize() {
    return proto.size;
  }
  return {
    getSize,
  };
}

function testClassAndFactoryFunction() {
  const myButton = new Button('Hello');
  myButton.click();
  console.dir(myButton);
  console.log(myButton instanceof Button);
  console.log(JSON.stringify(myButton));

  const redCar = new Car('red');
  console.dir(redCar);
  console.log(redCar.run());
  console.log(redCar instanceof Car);
  console.log(JSON.stringify(redCar));

  const myBycicle = Bycicle(26);
  console.dir(myBycicle);
  console.log(myBycicle.getSize());
  console.log(myBycicle instanceof Bycicle);
  console.log(JSON.stringify(myBycicle));
}

function testBox() {
  const myBox = Box(1, 2, 3);
  console.log(myBox.volumn());
}

function testBrick() {
  // todo
}



/* test */
// testClassAndFactoryFunction();
testBox();