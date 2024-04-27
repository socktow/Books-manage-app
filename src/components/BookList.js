import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { Table, Button, Modal } from 'antd';
import EditBookForm from './EditBookForm';

const BookList = ({ onDeleteBook }) => {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await api.getBooks();
        setBooks(booksData);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleEditBook = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleUpdateBook = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
    setShowModal(false);
  };

  const handleDeleteBook = async (bookId) => {
    try {
      await api.deleteBook(bookId);
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span>
          <Button onClick={() => handleEditBook(record)} key={`edit-${record.id}`}>Edit</Button>
          <Button onClick={() => handleDeleteBook(record.id)} key={`delete-${record.id}`}>Delete</Button>
        </span>
      ),
    },
  ];

  return (
    <div className="book-list-container">
      <h2>Book List</h2>
      <Table dataSource={books} columns={columns} />
      <Modal
        title="Edit Book"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <EditBookForm book={selectedBook} onUpdateBook={handleUpdateBook} />
      </Modal>
    </div>
  );
};

export default BookList;
