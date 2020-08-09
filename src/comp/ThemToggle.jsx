import React, { useContext } from 'react';
import { TheamContext } from '../contexts/Theam';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(TheamContext);
  return <button onClick={toggleTheme}>Toggle the them</button>;
};

export default ThemeToggle;
