import React from "react";
import { useSelector } from "react-redux";
import DentistItem from "./DentistItem";

function DentistsList() {
  const dentists = useSelector((state) => state.dentists);
  const sortedDentists = [...dentists].sort(function (a, b) {
    const surnameA = a.surname.toUpperCase();
    const surnameB = b.surname.toUpperCase();
    if (surnameA < surnameB) {
      return -1;
    }
    if (surnameA > surnameB) {
      return 1;
    }
    return 0;
  });
  console.log(sortedDentists);
  // sort by surname, then sort same surnames by name

  const dentistsList = sortedDentists.map(
    ({ name, surname, phone, email }, index) => (
      <DentistItem
        name={name}
        surname={surname}
        phone={phone}
        email={email}
        key={index}
      />
    )
  );
  console.log(dentistsList);

  return (
    <div>
      <h2>All dentists:</h2>
      <ul>{dentistsList}</ul>
    </div>
  );
}

export default DentistsList;
