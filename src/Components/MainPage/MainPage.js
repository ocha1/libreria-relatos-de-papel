import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const books = [
  { id: 1, title: "Libro A", author: "Autor A", code: "001", image: "/images/bookA.jpg" },
  { id: 2, title: "Libro B", author: "Autor B", code: "002", image: "/images/bookB.jpg" },
];

function MainPage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main-page">
      <input
        type="text"
        placeholder="Buscar por título"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="book-list">
        {filteredBooks.map(book => (
          <div key={book.id} className="book-item" onClick={() => navigate(`/book/${book.id}`)}>
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;