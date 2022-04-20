import './Button.scss';

export default function Button(props) {
  return (
    <button className="mdc-button mdc-button--raised">
      <span className="mdc-button__ripple"></span>
      <i className="material-icons mdc-button__icon">waving_hand</i>
      <span className="mdc-button__label">Hello</span>
    </button>
  );
}
