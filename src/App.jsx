import React from 'react';
import './App.scss';
import Navbar from './comp/nav';
import BookList from './comp/Booklist';
import Theam from './contexts/Theam';
import ThemToggle from './comp/ThemToggle';
import AuthContextProvider from './contexts/Auth';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <Theam>
          <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
          <BookList />
          </BookContextProvider>
          <ThemToggle />
          </AuthContextProvider>
      </Theam>
    </div>
  );
}

export default App;
