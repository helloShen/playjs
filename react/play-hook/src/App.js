/* eslint-disable no-unused-vars */
import './App.css';
import React, { useState } from 'react';
import { ThemeContext, themes } from './ThemeContext';
import Counter from './Counter';
import NameCard from './NameCard';
import NameCardClass from './NameCardClass';

export default function App() {
  return (
    <div className="App">
      <Counter />
      <ThemeContext.Provider value={themes.blue}>
        <NameCard />
      </ThemeContext.Provider>
    </div>
  );
}
