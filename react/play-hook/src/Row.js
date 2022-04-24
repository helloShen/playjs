import React from 'react';
import { ThemeContext } from './ThemeContext';
import './Row.css';

export default function Row({ label, children }) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className="row">
          <div className={"label " + theme}>{label}</div>
          {children}
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
