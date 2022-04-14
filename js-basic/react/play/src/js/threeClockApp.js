import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Clock from './clock.js'

function App(props) {
  // true && expression always evaluates to expression
  // false && expression always evaluates to false
  return (
    <div>
      {(props.number > 0) && <Clock />}
      {(props.number > 1) && <Clock />}
      {(props.number > 2) && <Clock />}
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<App number={3} />);