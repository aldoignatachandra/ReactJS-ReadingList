import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import '../styles/NavbarStyle.css';

const Navbar = () => {
    
    const { books } = useContext(BookContext);
    
    return (
        <div className="navbar">
            <h1>Ignata's Reading List</h1>
            <p>Currently you have { books.length } books to get through...</p>
        </div>
    );
}
 
export default Navbar;
