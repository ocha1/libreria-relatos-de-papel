import React from "react";
import { useParams } from "react-router-dom";

const books = [
  { id: 1, title: "Libro A", author: "Autor A", code: "001", description: "Descripción del Libro A", image: "/images/bookA.jpg" },
  { id: 2, title: "Libro B", author: "Autor B", code: "002", description: "Descripción del Libro B", image: "/images/bookB.jpg" },
];

function BookDetails({ addToCart }) {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  return (
    <div className="book-details">
      <img src={book.image} alt={book.title} />
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <button onClick={() => addToCart(book)}>Añadir al carrito</button>
    </div>
  );
}

export default BookDetails;
