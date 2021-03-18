import React from "react";
import cartItem from "./cartItem";
import { useSelector } from "react-redux";
import { selectCart } from "./productSlice";

export default function Cart() {
  const cart = useSelector(selectCart);
  return (
    <div id="mySidenav" class="sidenav">
      {cart.map((cartItem) => {
        return <cartItem product={cartItem} />;
      })}
      {/* <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a> */}
    </div>
  );
}
