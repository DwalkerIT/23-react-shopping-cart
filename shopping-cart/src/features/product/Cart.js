import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { selectCart } from "./productSlice";

export default function Cart() {
  const cart = useSelector(selectCart);

  return (
    <div id="mySidenav" class="sidenav">
      {cart.map((item) => {
        return <CartItem key={item.id} product={item} />;
      })}
      {/* <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a> */}
    </div>
  );
}
