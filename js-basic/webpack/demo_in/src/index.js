import _ from 'lodash';
import myName from './myName.js';
import './style.css';
import MyImage from './my-image.jpeg';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';


function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    const img = document.createElement('img');
    img.src = MyImage;
    element.appendChild(img);
    return element;
}

document.body.appendChild(component());

function myNameComponent() {
    const element = document.createElement('div');
    element.textContent = myName('shen');
    return element;
}

function consoleOutData() {
    /* xml */
    console.log(Data);
    /* csv */
    console.log(Notes);
    /* toml */
    console.log(toml.title);
    console.log(toml.owner.name);
    /* yaml */
    console.log(yaml.title);
    console.log(yaml.owner.name);
    /* json5 */
    console.log(json.title);
    console.log(json.owner.name);
}

document.body.appendChild(myNameComponent());
consoleOutData();
