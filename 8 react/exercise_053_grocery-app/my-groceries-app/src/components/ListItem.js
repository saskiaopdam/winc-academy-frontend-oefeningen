import React from "react";

function ListItem(props) {
  // console.log(props);
  return (
    <li
      key={props.item.id}
      className="list-item"
      onClick={() =>
        props.handleClickGroceryItem(props.item.id, props.item.title)
      }
      value={props.item.title}
    >
      {props.item.title}{" "}
      <span style={{ float: "right" }}>
        {props.item.count ? "Hoeveelheid: " + props.item.count : ""}
      </span>
    </li>
  );
}

export default ListItem;
