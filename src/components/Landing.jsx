import React from 'react';
import UndrawBooks from '../assets/Undraw_Books.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
     
    <section id="landing">
<header>
    <div className="header__container">
        <div className="header__description">
            <h1>Washington's most awarded online bookstore platform</h1>
            <h2>Discover your next great read with <span className="purple">Library</span></h2>
    <Link to="/Featured">
         <button className="btn">Browse Books</button>
    </Link>
      </div>
      <figure className="header__image--wrapper">
       <img src={UndrawBooks} alt="Library"  />
      </figure>
    </div>
</header>
        </section>
    );
};

export default Landing;