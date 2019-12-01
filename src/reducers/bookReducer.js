import uuid from 'uuid/v1';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const bookReducer = (state, action) => {
    switch(action.type) {

        //Reducer Add Book
        case "ADD_BOOK":
            if (state.filter(book => book.title === action.book.title).length > 0) {
                if (state.filter(book => book.author === action.book.author).length > 0) {
                    toast.warn(`Book "${action.book.title}" Already Exist In List`)
                    return state;
                } else {
                    toast.success(`Success Add New Book "${action.book.title}"`)
                    return [...state, {
                        title: action.book.title,
                        author: action.book.author,
                        id: uuid()
                    }]
                }
            } else {
                toast.success(`Success Add New Book "${action.book.title}"`)
                return [...state, {
                    title: action.book.title,
                    author: action.book.author,
                    id: uuid()
                }]
            }
        
        //Reducer Remove Book
        case "REMOVE_BOOK":
            return state.filter(book => book.id !== action.id)
        
        //Reducer Default State
        default:
            return state
    }
}