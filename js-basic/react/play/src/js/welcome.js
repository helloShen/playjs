import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function Welcome(props) {
  return (
    <h1>Hello, {props.name}</h1>
  );
}

function App() {
  const element = (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
  root.render(element);
}

App();
