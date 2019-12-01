import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';
import '../styles/BookListStyle.css';

const BookList = () => {
    
    const { books } = useContext(BookContext);

    return books.length ? (
        <div className="book-list">
            <ul>
                { books.map(book => {
                    return ( <BookDetails book={book} key={book.id} /> )
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">
            <h3>No books to read. Hello free time :)</h3>
            <div>
                <img className="icon" src={require("../assets/tea-time.png")} />
            </div>
        </div>
    )
}
 
export default BookList;