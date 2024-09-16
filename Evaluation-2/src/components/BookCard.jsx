import React, { useState } from "react";
import BookDetail from "./BookDetail";

function BookCard({ book }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="book-card">
      <img src={book.coverImage} alt={book.title} />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.genre}</p>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
      {showMore && <BookDetail book={book} />}
    </div>
  );
}

export default BookCard;
