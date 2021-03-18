import React from "react";
export default function cartItem(props) {
  return (
    <div className="cart-item">
      <div>
        <img src={props.product.img.thumb} alt={props.product.title} />
      </div>
      <div className="cart-item-details">
        <p>{props.product.title}</p>
        <p>
          {props.product.availableSizes[0]} | {props.product.style}
        </p>
        <p>Quantity {props.product.quantity}</p>
      </div>
      <div>
        <span>x</span>
        <p>{props.product.price}</p>
        <div>
          <button className="cart-item-btn">-</button>
          <button className="cart-item-btn">+</button>
        </div>
      </div>
    </div>
  );
}
