import React, { useState } from "react";
import BookCard from "./BookCard";

function Home({ books, fetchBooks }) {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      {flag && (
        <div>
          <h1>Welcome to Masai Library</h1>
          <button
            onClick={() => {
              fetchBooks();
              setFlag(false);
            }}
          >
            Get Books
          </button>
        </div>
      )}
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
