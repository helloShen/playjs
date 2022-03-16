class Button {
    constructor(value) {
        this.value = value;
    }

    click() {
        console.log(this.value);
    }
}

const myButton = new Button('Hello');
myButton.click();