import React from 'react';
import './Counter.css'

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = () => this.setState({
      count: this.state.count + 1,
    });
    this.decrement = () => this.setState({
      count: this.state.count - 1,
    });

  }

  static getDerivedStateFromProps(props, state) {
    console.log('--------------------------');
    console.log('getDerivedStateFromProps()');
    if (props.seed !== state.seed) {
      return {
        seed: props.seed,
        count: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate()');
    if (nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

  render() {
    console.log('render()');
    if (this.state.error) {
      return <div>We have encounter an error. {this.state.error}</div>
    }
    const {
      ignoreProp,
      seed,
    } = this.props;
    const {
      count,
    } = this.state;
    return (
      <div className="counter">
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div>{count}</div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate()');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch()');
    this.setState({error, info});
  }
}