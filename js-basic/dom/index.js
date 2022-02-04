const content = document.querySelector('.content');

/*
 * Part 1: DOM Elements
 */
const red_p = document.createElement('p');
red_p.textContent = 'Hey, I\'m red!';
red_p.style ='color: red';
content.appendChild(red_p);

const h3 = document.createElement('h3');
h3.textContent = 'I\'m blue h3';
h3.style = 'color: blue';
content.appendChild(h3);

const container = document.createElement('div');
container.style = 'background-color: pink; border: black solid 5px';
// container.textContent = 'I\'m black pink div';
content.appendChild(container);

const h1 = document.createElement('h1');
h1.textContent = 'I\'m a div';
container.appendChild(h1);

const p = document.createElement('p');
p.textContent = 'ME TOO!';
container.appendChild(p);


/*
 * Part 2: Events
 */
const btn = document.querySelector('#btn');
btn.style['background-color'] = 'red';
btn.addEventListener('click', () => console.dir(btn.style));
btn.addEventListener('click', () => {
    console.log(`This button is in ${btn.style['background-color']}`);
});
// change the button color when clicked on
btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'blue';
    e.target.textContent = 'I\'m blue now.';
});

// change the color of #1, #2, #3 button, when #btn clicked */
const buttons = document.querySelectorAll('.container button');
btn.addEventListener('click', (e) => {
    let color = e.target.style.backgroundColor;
    buttons.forEach((button) => {
        button.style.backgroundColor = color;
        button.textContent = 'I\'m also blue!';
    });
});
