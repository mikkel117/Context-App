import React, { Component } from 'react';
import { TheamContext } from '../contexts/Theam';

class BookList extends Component {
    static contextType = TheamContext
    state = {  }
    render() { 
        const { isLightTheam, light, dark } = this.context;
        const theme = isLightTheam ? light : dark;
        return ( 
            <div className="bookList" style={{ color: theme.syntex, background: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui }}>the way of kings</li>
                    <li style={{ background: theme.ui }}>the name of the wind</li>
                    <li style={{ background: theme.ui }}>the final empire</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;