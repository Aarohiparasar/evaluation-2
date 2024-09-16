import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/Home";
import ThemeSwitch from "./components/ThemeSwitch";
import AddBookForm from "./components/AddBookForm";
import Filter from "./components/Filter";

function App() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const fetchBooks = () => {
    axios
      .get("https://dummy-791a4-default-rtdb.firebaseio.com/books.json")
      .then((res) => {
        const booksData = Object.entries(res.data).map(([id, data]) => ({
          id,
          ...data,
        }));
        setBooks(booksData);
        setFilteredBooks(booksData);
      })
      .catch((error) => console.error("Error fetching books:", error));
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
   
      
      
      <ThemeSwitch theme={theme} setTheme={setTheme} />
      <Home books={filteredBooks} fetchBooks={fetchBooks} />
      <Filter books={books} setFilteredBooks={setFilteredBooks} />
      <AddBookForm fetchBooks={fetchBooks} />
    </div>
  );
}

export default App;
