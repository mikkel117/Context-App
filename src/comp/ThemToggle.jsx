import React, { Component } from 'react'
import { TheamContext } from '../contexts/Theam';

class ThemToggle extends Component {
    static contextType = TheamContext
    render() { 
        const { toggleTheme } = this.context;
        return ( 
            <button onClick={ toggleTheme }>Toggle the them</button>
         );
    }
}
 
export default ThemToggle;