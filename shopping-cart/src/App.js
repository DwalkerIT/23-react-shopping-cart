import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { ProductList } from "./features/product/ProductList";
import Cart from "./features/product/Cart";
import "./App.css";

function App() {
  return (
    <div>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
