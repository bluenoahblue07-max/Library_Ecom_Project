import React from 'react';
import Book from './Book';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Rating = ({ rating }) => {
    return (
    <div className="book_ratings"> 
        {new Array(Math.floor(rating)).fill(0).map((_, i) => (
            <FontAwesomeIcon icon="star" />
        ))}
        {!Number.isInteger(rating) && 
        <FontAwesomeIcon  icon="star-half-alt" />}
                                        </div>
    );
}

export default Rating;