import React from "react";

export default function Product() {
  const product = {
    id: 12,
    sku: 12064273040195392,
    title: "Cat Tee Black T-Shirt",
    description: "4 MSL",
    availableSizes: ["S", "XS"],
    style: "Black with custom print",
    price: 10.9,
    installments: 9,
    currencyId: "USD",
    currencyFormat: "$",
    isFreeShipping: true,
    img: {
      normal: "/assets/12064273040195392_1.jpg",
      thumb: "/assets/12064273040195392_2.jpg",
    },
  };
  function formatPrice(price) {
    return price.toFixed(2);
  }
  return (
    <div className="product">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${product.image.thumb})` }}
      ></div>
      <h2 className="product-title">{product.title}</h2>
      <div className="product-dash"></div>
      <p className="product-price">${formatPrice(product.price)}</p>
      <p className="product-installments">
        {formatPrice(product.price / product.installments)}
      </p>
      <button className="product-btn">Add to Cart</button>
    </div>
  );
}
