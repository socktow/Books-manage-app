import axios from 'axios';

const baseURL = 'http://localhost:3001';

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  addBook: async (newBook) => {
    try {
      const response = await instance.post('/books', newBook); 
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getBooks: async () => {
    try {
      const response = await instance.get('/books');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteBook: async (bookId) => {
    try {
      await instance.delete(`/books/${bookId}`);
    } catch (error) {
      throw error;
    }
  },

  updateBook: async (bookId, updatedBook) => {
    try {
      const response = await instance.put(`/books/${bookId}`, updatedBook);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;
