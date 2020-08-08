import React, { Component } from 'react';
import { TheamContext } from '../contexts/Theam';
import { AuthContext } from '../contexts/Auth';

// class Navbar extends Component {
    function Navbar(){
        // static and render is only used when you have a class compinent
        // static contextType = TheamContext
        //   render() {
        // console.log(this.context);
    return (
        <AuthContext.Consumer>{(authContext) => (
            <TheamContext.Consumer>{(themeContext) => {
                const { isAuthenticated,toggleAuth } = authContext
                const { isLightTheam, light, dark } = themeContext; 
                const theme = isLightTheam ? light : dark;
                return(
           <nav style={{ background: theme.ui, color: theme.syntex }}>
             <h1>Context App</h1>
             <div onClick={toggleAuth}>
                { isAuthenticated ? 'Logged in' : 'Logged out' }
             </div>
             <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
             </ul>
           </nav>
           )
         }}
       </TheamContext.Consumer>
        )}
    
      </AuthContext.Consumer>
    );
  }
// }

export default Navbar;
