import React, { createContext, Component } from 'react'

export const TheamContext = createContext();

class Theam extends Component {
    state = { 
        isLightTheam: true,
        light: { syntex: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntex: '#ddd', ui: '#333', bg: '#555' }
     }
     toggleTheme = () => {
         this.setState({ isLightTheam: !this.state.isLightTheam })
     }
    render() { 
        return ( 
            <TheamContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </TheamContext.Provider>
         );
    }
}
 
export default Theam;
