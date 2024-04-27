// src/components/BookItem.js
import React from 'react';

const BookItem = ({ book, onDeleteBook, onEditBook }) => {
  const handleDelete = () => {
    onDeleteBook(book.id);
  };

  const handleEdit = () => {
    onEditBook(book);
  };

  return (
    <>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.year}</td>
      <td>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </>
  );
};

export default BookItem;
