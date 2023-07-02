import React from "react";

function AssistantItem({ name, surname, phone, email }) {
  return (
    <li>
      {surname}, {name}, {phone}, {email}
    </li>
  );
}

export default AssistantItem;
