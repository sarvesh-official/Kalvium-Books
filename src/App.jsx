import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Form from "./components/Form";
import NotFound404 from "./components/NotFound404";
import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const apiUrl = "https://reactnd-books-api.udacity.com/books";
    const headers = { Authorization: "whatever-you-want" };

    fetch(apiUrl, { headers })
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.books);
        setFilteredBooks(data.books);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchQuery, books]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Navbar setSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<HomePage books={filteredBooks} />} />
        <Route path="/register" element={<Form />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default App;
