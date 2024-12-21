import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Pedido realizado con éxito");
    clearCart();
    navigate("/main");
  };

  return (
    <div className="checkout">
      <h1>Resumen de tu compra</h1>
      <ul>
        {cart.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
      <button onClick={handlePayment}>Pagar</button>
    </div>
  );
}

export default Checkout;
