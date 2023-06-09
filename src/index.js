import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import {books} from './book'
import Book from './BookCom'

const BookList = () => {
    return <section className="booklist">
        {books.map((book) => {
            return <Book {...book} key={book.id} />
        })}
    </section> 
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

