import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <h2>Carrito</h2>
      <ul>
        {cart.map((book, index) => (
          <li key={index}>
            {book.title} <button onClick={() => removeFromCart(book.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/checkout")}>Checkout</button>
    </div>
  );
}

export default Cart;