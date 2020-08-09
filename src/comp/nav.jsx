import React, { useContext } from 'react';
import { TheamContext } from '../contexts/Theam';
import { AuthContext } from '../contexts/Auth';

// class Navbar extends Component {
const NavBar = () => {
  const { isLightTheam, light, dark } = useContext(TheamContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheam ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntex }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? 'Logged in' : 'Logged out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
