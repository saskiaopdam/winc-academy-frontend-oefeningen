import React from "react";

function PatientItem({ name, surname, phone, email, birthyear }) {
  return (
    <li>
      {surname}, {name}, {phone}, {email}, {birthyear}
    </li>
  );
}

export default PatientItem;
