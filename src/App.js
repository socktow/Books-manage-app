import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import './App.css';
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Books Manager</h1>
        <AddBookForm />
        <BookList />
      </div>
    </Provider>
  );
};

export default App;
