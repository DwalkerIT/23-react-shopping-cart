import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./productSlice";

export default function Product({ product }) {
  const dispatch = useDispatch();
  function formatPrice(price) {
    return price.toFixed(2);
  }
  return (
    <div className="product" onClick={() => dispatch(addToCart(product))}>
      {product.isFreeShipping ? (
        <span className="product-shipping">Free Shipping</span>
      ) : null}
      <div
        className="product-image"
        style={{ backgroundImage: `url(${product.img.thumb})` }}
      ></div>
      <h2 className="product-title">{product.title}</h2>
      <div className="product-dash"></div>
      <p className="product-price">
        <span className="product-price-currency">$</span>$
        {formatPrice(product.price)}
      </p>
      <p className="product-installments">
        {" "}
        or {product.installments} x{" "}
        {formatPrice(product.price / product.installments)}
      </p>
      <button className="product-btn">Add to Cart</button>
    </div>
  );
}
