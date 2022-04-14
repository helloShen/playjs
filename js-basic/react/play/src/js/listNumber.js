import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

function ListNumber(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
    <li key={number.toString()}>Item {number}</li>
  );
  return <ul>{listItems}</ul>;
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const numbers = [1, 2, 3, 4, 5];
root.render(
  <ListNumber numbers={numbers}/>
);

