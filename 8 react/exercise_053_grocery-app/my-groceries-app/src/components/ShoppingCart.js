import React from "react";
import List from "./List";

function ShoppingCart(props) {
  // console.log(props);
  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={() => props.emptyCart()}>Empty Cart</button>
      <List listItems={props.shoppingListItems} />
    </div>
  );
}

export default ShoppingCart;
