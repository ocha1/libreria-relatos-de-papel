import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AccessView() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="access-view">
      <h1>Bienvenido a la Tienda de Libros</h1>
      <p>Redirigiendo a la página principal...</p>
    </div>
  );
}

export default AccessView;