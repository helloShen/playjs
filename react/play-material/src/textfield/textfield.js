/* eslint-disable no-unused-vars */
import './textfield.scss';
import React from 'react';
import { MDCTextField } from '@material/textfield';

export default class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.filledTemplate = (
      <label className="mdc-text-field mdc-text-field--filled">
        <span className="mdc-text-field__ripple"></span>
        <span className="mdc-floating-label" id="my-label-id">{props.hint}</span>
        <input className="mdc-text-field__input" type="text" aria-labelledby="my-label-id" />
        <span className="mdc-line-ripple"></span>
      </label>
    );
    this.outlinedTemplate = (
      <label className="mdc-text-field mdc-text-field--outlined">
        <span className="mdc-notched-outline">
          <span className="mdc-notched-outline__leading"></span>
          <span className="mdc-notched-outline__notch">
            <span className="mdc-floating-label" id="my-label-id">{props.hint}</span>
          </span>
          <span className="mdc-notched-outline__trailing"></span>
        </span>
        <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
      </label>
    );
  }
  
  componentDidMount() {
    const textfield = new MDCTextField(document.querySelector('.mdc-text-field'));
  }
  
  render() {
    return (this.props.variant === 'filled' && this.filledTemplate) ||
    (this.props.variant === 'outlined' && this.outlinedTemplate) ||
    (this.filledTemplate);
  }
}