import React, { useState } from 'react';
import api from '../api/api';

const EditBookForm = ({ book, onUpdateBook }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [year, setYear] = useState(book.year);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.updateBook(book.id, { title, author, year });
      onUpdateBook({ id: book.id, title, author, year });
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditBookForm;
