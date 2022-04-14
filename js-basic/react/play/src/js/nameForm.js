import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

function RepeatArea(props) {
  return (
    <textarea value={props.text} />
  );
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" name="Submit" />
        </form>
        <p>Repeat above: </p>
        <RepeatArea text={this.state.value}/>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<NameForm />);