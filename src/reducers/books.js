// src/reducers/books.js
import * as types from '../actions/types';

const initialState = {
  books: []
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    case types.DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      };
    case types.UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map(book =>
          book.id === action.payload.id ? action.payload.updatedBook : book
        )
      };
    default:
      return state;
  }
};

export default booksReducer;
