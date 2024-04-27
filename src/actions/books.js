// src/actions/books.js
import * as types from './types';

export const addBook = (book) => ({
  type: types.ADD_BOOK,
  payload: book,
});

export const deleteBook = (id) => ({
  type: types.DELETE_BOOK,
  payload: id
});

export const updateBook = (id, updatedBook) => ({
  type: types.UPDATE_BOOK,
  payload: { id, updatedBook }
});
