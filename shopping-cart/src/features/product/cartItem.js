import React from "react";
export default function CartItem({ product }) {
  return (
    <div className="cart-item" key={product.id}>
      <div>
        <img src={product.img.thumb} alt={product.title} />
      </div>
      <div className="cart-item-details">
        <p>{product.title}</p>
        <p>
          {product.availableSizes[0]} | {product.style}
        </p>
        <p>Quantity {product.quantity}</p>
      </div>
      <div>
        <span>x</span>
        <p>{product.price}</p>
        <div>
          <button className="cart-item-btn">-</button>
          <button className="cart-item-btn">+</button>
        </div>
      </div>
    </div>
  );
}
