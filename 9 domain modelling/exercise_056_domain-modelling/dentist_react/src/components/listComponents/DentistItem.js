import React from "react";

function DentistItem({ name, surname, phone, email }) {
  return (
    <li>
      {surname}, {name}, {phone}, {email}
    </li>
  );
}

export default DentistItem;
