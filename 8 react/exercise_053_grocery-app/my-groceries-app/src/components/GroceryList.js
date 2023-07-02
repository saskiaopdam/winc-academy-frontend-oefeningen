import React from "react";
import List from "./List";
import InputField from "./InputField";

function GroceryList(props) {
  // console.log(props);
  return (
    <div>
      <h1>Grocery List</h1>
      <InputField addGroceryItem={props.addGroceryItem} />
      <List
        listItems={props.groceryItems}
        handleClickGroceryItem={props.handleClickGroceryItem}
      />
    </div>
  );
}

export default GroceryList;
