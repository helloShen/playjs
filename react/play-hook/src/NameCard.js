import './NameCard.css'
import Row from './Row';
import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

export default function NameCard() {
  const name = useFormInput('Mary');
  const surname = useFormInput('Poppins');
  const theme = useContext(ThemeContext);
  const windowWidth = useWindowWidth();
  useDocumentTitle(name.value + ' ' + surname.value);

  return (
    <div className={"namecard " + theme}>
      <Row label="Name">
        <input className="input" { ...name }/>
      </Row>
      <Row label="Surname">
        <input className="input" { ...surname }/>
      </Row>
      <Row label="Window width">
        <div className="input">{windowWidth}</div>
      </Row>
    </div>
  );
}

/**
 * Customed Hook
 * @returns {Number} current window width
 */
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return (() => window.removeEventListener('resize', handleResize));
  });
  return windowWidth;
}

/**
 * Another Hook
 * @param {String} title 
 */
function useDocumentTitle(title) {
  document.title = title;
}

/**
 * The third hook
 * @param {String} initialValue 
 * @returns {Object} 
 */
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleValueChange = (e) => setValue(e.target.value);
  return {
    value,
    onChange: handleValueChange,
  };
}