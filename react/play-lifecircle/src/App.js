import React from 'react';
import './App.css';
import Counter from './Counter';

function ErrorComponent(props) {
  return (
    <div>Woow! {props.nonExistProp}</div>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
    };
    this.mount = () => {
      console.log('mount()');
      this.setState({mount: true});
    }
    this.unmount = () => {
      console.log('unmount()');
      this.setState({mount: false});
    }
    this.ignoreProp = () => this.setState({
      ignoreProp: Math.random(),
    });
    this.generateSeed = () => this.setState({
      seed: Math.floor(Math.random() * 100),
    });
  }

  render() {
    const {
      mount,
      ignoreProp,
      seed,
    } = this.state;
    return (
      <div className="App">
        <button
          onClick={this.mount}
          disabled={mount}
        >Mount</button>
        <button
          onClick={this.unmount}
          disabled={!mount}
        >Unmount</button>
        <button
          onClick={this.ignoreProp}
        >Ignore Prop</button>
        <button
          onClick={this.generateSeed}
        >Generate Seed</button>
        <ErrorComponent />
        <hr/>
        {(mount) ? 
          <Counter 
            ignoreProp={ignoreProp}
            seed={seed}
          /> : null}
      </div>
    );
  }
}
