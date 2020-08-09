import React, { Component, useContext } from 'react';
import { TheamContext } from '../contexts/Theam';
import { BookContext } from '../contexts/BookContext';

// class BookList extends Component {
//     static contextType = TheamContext
//     state = {  }
//     render() {
//         const { isLightTheam, light, dark } = this.context;
//         const theme = isLightTheam ? light : dark;
//         return (
//             <div className="bookList" style={{ color: theme.syntex, background: theme.bg }}>
//                 <ul>
//                     <li style={{ background: theme.ui }}>the way of kings</li>
//                     <li style={{ background: theme.ui }}>the name of the wind</li>
//                     <li style={{ background: theme.ui }}>the final empire</li>
//                 </ul>
//             </div>
//          );
//     }
// }

const BookList = () => {
  const { isLightTheam, light, dark } = useContext(TheamContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheam ? light : dark;
  return (
    <div
      className="bookList"
      style={{ color: theme.syntex, background: theme.bg }}
    >
      <ul>
        {books.map(book => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;

// export default BookList;
