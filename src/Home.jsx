// src/Home.jsx

import React from "react";
import BookCard from "./components/BookCard"; // Adjust the import path as necessary
import books from "./booksData";
import "./Home.css";
import { Link } from "react-router-dom"; // This is the correct import for Link

const Home = () => {
  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <Link to="/add" className="add-button">Add New Book</Link>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;