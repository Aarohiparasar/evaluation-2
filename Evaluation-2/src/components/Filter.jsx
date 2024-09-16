import React, { useState } from "react";

function Filter({ books, setFilteredBooks }) {
  const [genre, setGenre] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filterBooks = () => {
    let filtered = books;
    if (genre) {
      filtered = filtered.filter((book) => book.genre === genre);
    }
    if (startDate && endDate) {
      filtered = filtered.filter(
        (book) =>
          book.publicationDate >= startDate && book.publicationDate <= endDate
      );
    }
    setFilteredBooks(filtered);
  };

  return (
    <div className="filter">
      <select onChange={(e) => setGenre(e.target.value)}>
        <option value="">Filter by Genre</option>
        <option value="Romance">Romance</option>
        <option value="Fiction">Fiction</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Adventure">Adventure</option>
      </select>
      <input type="date" onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" onChange={(e) => setEndDate(e.target.value)} />
      <button onClick={filterBooks}>Apply Filters</button>
    </div>
  );
}

export default Filter;
