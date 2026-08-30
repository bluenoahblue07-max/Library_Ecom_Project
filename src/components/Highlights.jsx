import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
<div>
 <section id="highlights">
    <div className="container">
     <div className="row">
        <h2 className="section__title">
            why choose <span className="purple">Library</span>
        </h2>
        <div className="highlight__wrapper">
           <Highlight 
           icon={<FontAwesomeIcon icon="bolt" />} 
            title="Easy and Quick"
            para="Get access to a wide range of books and resources with just a few clicks. Our user-friendly interface ensures a seamless experience for all users."
                      />
                       <Highlight 
           icon={<FontAwesomeIcon icon="tags" />} 
            title="Affordable"
            para="Access a wide range of books and resources at affordable prices. We believe that knowledge should be accessible to everyone, which is why we offer competitive pricing on all our materials."
                      />
                       <Highlight 
           icon={<FontAwesomeIcon icon="book-open" />} 
            title="10,000+ Books"
            para="Explore our extensive collection of over 10,000 books across various genres and categories. Whether you're looking for fiction, non-fiction, or academic resources, we have something for everyone."
                      />
        </div>
     </div>
    </div>
</section>
</div>  
 );
}

export default Highlights;