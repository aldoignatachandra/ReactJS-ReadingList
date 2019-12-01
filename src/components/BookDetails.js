import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = ({ book }) => {
    
    const { dispatch } = useContext(BookContext);

    const handleRemove = (e) => {

        e.preventDefault();
        dispatch({ 
            type: "REMOVE_BOOK", id: book.id 
        })
        toast.success(`Success Remove Book "${book.title}" From List`);
    }

    return (
        <>
            <li onClick={handleRemove}>
                <div className="title">Title : { book.title }</div>
                <div className="author">Author : { book.author }</div>
            </li>
            <ToastContainer 
                position="top-right"
                autoClose={2500} 
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={false}
                draggable={false}
                pauseOnFocusLoss={false}
            />
        </>
    );
}
 
export default BookDetails;