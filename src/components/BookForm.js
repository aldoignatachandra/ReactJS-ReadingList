import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/BookFormStyle.css';

const BookForm = () => {

    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const showToast = (type, text) => { 
        type === "Warning" ? toast.warn(text) : toast.success(text);
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        if (title === "") { 
            return showToast("Warning", "Title Cannot Be Empty");
        }

        if (author === "") { 
            return showToast("Warning", "Author Cannot Be Empty");
        }

        dispatch({
            type: "ADD_BOOK", book : { title, author }
        });
        setTitle("");
        setAuthor("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Insert New Book Title Here ......." 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength={50}
                />
                <input 
                    type="text" 
                    placeholder="Insert New Book Author Here ......." 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    maxLength={50}
                />
                <input 
                    type="submit" 
                    value="Add Book" 
                />
            </form>
            <ToastContainer 
                position="top-right"
                autoClose={2500} 
                hideProgressBar={false}
                closeOnClick={false}
                pauseOnHover={false}
                draggable={false}
                pauseOnFocusLoss={false}
            />
        </>
    );
}
 
export default BookForm;
