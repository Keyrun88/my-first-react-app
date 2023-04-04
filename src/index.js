import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
const author = "Dav Pilkey"
const imageAlt = "Dog Man: Twenty Thousand Fleas Under the Sea"

const inlineHeadStyle =
{
    color: '#617d98',
    fontsize: '0.75',
    marginTop: '0.5rem'
}

const BookList = () => {
    return <section className="booklist">
        <Book title="Atomic Habits: The life-changing" image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" author="James Clear" />
        <Book title="Ikigai: The Japanese secret to a long and happy life" image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51xwGSNX-EL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" author="Hector Garcia" />
        <Book title="The Psychology of Money" image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" author="Morgan Housel" />

    </section>
}
const Book = (props) => {
    return <article className="books">
        <img src={props.image} alt={imageAlt}></img>
        <h2>{props.title}</h2>
        <h4 style={inlineHeadStyle}>{props.author}</h4>


    </article>
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

