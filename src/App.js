import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccessView from "./Components/AccessView/AccessView";
import MainPage from "./Components/MainPage/MainPage";
import BookDetails from "./Components/BookDetails/BookDetails";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Cart />
        <Routes>
          <Route path="/" element={<AccessView />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
