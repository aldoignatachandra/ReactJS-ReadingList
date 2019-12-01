import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookContextProvider from './contexts/BookContext';
import BookForm from './components/BookForm';
import './styles/AppStyle.css';

const App = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
