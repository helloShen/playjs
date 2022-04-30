import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Play() {
  const x = 1;
  function inner() {
    console.log(x);
  }
  return (
    <button onClick={inner}>log x</button>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
)
root.render(<Play />);