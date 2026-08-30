import Book from './ui/Book';
import React from 'react';
import { books } from '../data.js'

const Featured = () => {
    console.log(books);
    function getFiveStarBooks() {
      
    }
  return (
    <div>
<section className="features">
<div className="container">
    <div className="row">
        <h2 className="section__title">
            Featured Books <span className="purple">Books</span>
        </h2>
        <div className="books">
             {books
             .filter((book) => book.rating === 5)
             .slice(0, 4)
             .map((book, ) => ( 
             <Book book={book} key={book.id}/>
            ))}
        </div>
    </div>
</div>
</section>
    </div>
  );
};

export default Featured;