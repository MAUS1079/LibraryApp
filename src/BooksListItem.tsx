import React from 'react';
import { Book } from './Book';
import { convertToObject } from 'typescript';

type Props = {
  book: Book;
};

const BooksListItem: React.FC<Props> = ({ book }) => {
  return <li>{book.title}</li>;
};

export default BooksListItem;
