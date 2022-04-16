import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

function CompositionBorder(props) {
  return (
    <div className={'CompositionBorder CompositionBorder-' + props.color}>
      {props.first}
      {props.children}
      {props.last}
    </div>
  );
}

function Logo() {
  return (
    <h1>NASA</h1>
  );
}

function Contact() {
  return (
    <p>Contact: (1)888-888-8888</p>
  );
}

function WelcomeDialog() {
  return (
    <CompositionBorder
      color="blue"
      first={
        <Logo />
      }
      last={
        <Contact />
      }
    >
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </CompositionBorder>
  );
}



/**
 * Main render
 */

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<WelcomeDialog />);
