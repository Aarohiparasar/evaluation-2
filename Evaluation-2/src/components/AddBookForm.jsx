import React, { useState } from "react";
import axios from "axios";

function AddBookForm({ fetchBooks }) {
  const [newBook, setNewBook] = useState({
    name: "",
    title: "",
    author: "",
    genre: "",
    coverImage: "",
    synopsis: "",
    publicationDate: "",
  });

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://dummy-791a4-default-rtdb.firebaseio.com/books.json",
        newBook
      )
      .then(() => {
        alert("Book added successfully");
        fetchBooks();
      })
      .catch((error) => console.error("Error adding book:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="author" placeholder="Author" onChange={handleChange} />
      <input
        name="coverImage"
        placeholder="Cover Image URL"
        onChange={handleChange}
      />
      <textarea
        name="synopsis"
        placeholder="Synopsis"
        onChange={handleChange}
      />
      <input name="publicationDate" type="date" onChange={handleChange} />
      <select name="genre" onChange={handleChange}>
        <option value="">Select Genre</option>
        <option value="Romance">Romance</option>
        <option value="Fiction">Fiction</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Adventure">Adventure</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;
