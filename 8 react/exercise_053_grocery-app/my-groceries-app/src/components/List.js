import React from "react";
import ListItem from "./ListItem";

function List(props) {
  // console.log(props);
  const list = props.listItems.map((item) => (
    <ListItem
      key={item.id}
      item={item}
      handleClickGroceryItem={props.handleClickGroceryItem}
    />
  ));
  return <ul>{list}</ul>;
}

export default List;
