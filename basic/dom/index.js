const content = document.querySelector('.content');

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

