import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

const inlineHeadStyle =
{
    color: '#617d98',
    fontsize: '0.75',
    marginTop: '0.5rem'
}

const books = [{
    title: "Atomic Habits: The life-changing",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    author: "James Clear",
    id:1
},
{
    title: "Ikigai: The Japanese secret to a long and happy life",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51xwGSNX-EL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    author: "Hector Garcia",
    id:2
},
{
    title: "The Psychology of Money",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    author: "Morgan Housel",
    id:3
}]

const BookList = () => {
    return <section className="booklist">
       
        {books.map(({title, author, image, id }) => {
            return <Book title={title} author={author} image={image} key={id}/>
        })}</section> 
}
const Book = ({ title, author, image }) => {
    return <article className="books">
        <img src={image}></img>
        <h2>{title}</h2>
        <h4 style={inlineHeadStyle}>{author}</h4>

    </article>
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

