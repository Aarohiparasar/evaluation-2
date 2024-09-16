import React from "react";

function BookDetail({ book }) {
  return (
    <div className="book-detail">
      <img src={book.coverImage} alt={book.title} />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.synopsis}</p>
      <p>Publication Date: {book.publicationDate}</p>
      <p>Genre: {book.genre}</p>
    </div>
  );
}

export default BookDetail;
