import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const boilTemperature = {
  c: 100,
  f: 212
};

function BoilingVerdict(props) {
  const temperature = parseInt(props.temperature);
  const scale = props.scale;
  if (temperature >= boilTemperature[scale]) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

function TemperatureInput(props) {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
      <input
        value={props.temperature}
        onChange={(e) => props.onTemperatureChange(e.target.value, props.scale)}
      />
      <BoilingVerdict 
        temperature={props.temperature}
        scale={props.scale}
      />
    </fieldset>
  );
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.onTemperatureChange = this.onTemperatureChange.bind(this);
    this.state = {
      temperature: '',
      scale: 'c'
    };
  }

  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  /**
   * Convert "100" celcius to "212" fahrenheit,
   * or vice versa.
   * @param {String} temperature input temperature in string
   * @param {Function} fn convert function
   * @return {String} converted temperature in string
   */
  tryConvert(temperature, convertFn) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convertFn(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  onTemperatureChange(temperature, scale) {
    this.setState({
      temperature: temperature,
      scale: scale
    });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celcius = (scale === 'c') ? temperature : this.tryConvert(temperature, this.toCelsius);
    const fahrenheit = (scale === 'f') ? temperature : this.tryConvert(temperature, this.toFahrenheit);
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celcius}
          onTemperatureChange={this.onTemperatureChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.onTemperatureChange}
        />
      </div>
    );
  }
}


/**
 * Main Render
 */
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<Calculator />);