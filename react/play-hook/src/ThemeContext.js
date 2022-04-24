import React from 'react';

export const themes = {
  orange: 'theme-orange',
  blue: 'theme-blue',
  dark: 'theme-dark',
}

export const ThemeContext = React.createContext(
  themes.dark
);