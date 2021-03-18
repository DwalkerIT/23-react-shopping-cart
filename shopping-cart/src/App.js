import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { ProductList } from "./features/product/ProductList";
import "./App.css";

function App() {
  return (
    <div>
      <ProductList />
    </div>
  );
}

export default App;
