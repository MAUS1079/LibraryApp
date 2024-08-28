import React, { useEffect, useContext } from 'react';
import { Book } from './Book';
import BooksListItem from './BooksListItem';
import axios from 'axios';
import BooksContext from './BooksContext';

// const books: Book[] = [
//   {
//     id: 1,
//     title: 'JavaScript - The Comprehensive Guide',
//     author: 'Philip Ackermann',
//     isbn: '978-3836286299',
//     rating: 5,
//   },
//   {
//     id: 2,
//     title: 'Clean Code',
//     author: 'Robert Martin',
//     isbn: '978-0132350884',
//     rating: 4,
//   },
//   {
//     id: 3,
//     title: 'Design Patterns',
//     author: 'Erich Gamma',
//     isbn: '978-0201633610',
//     rating: 5,
//   },
// ];

const BooksList: React.FC = () => {
  const [books, setBooks] = useContext(BooksContext);
  
  useEffect(() => {
    axios
      .get<Book[]>('http://localhost:3001/books')
      .then((response) => setBooks(response.data));
  }, []);
  
  return (
    <ul>
      {books.map((book) => (
        <BooksListItem key={book.id} book={book} />
      ))}
    </ul>
  );
};

export default BooksList;
