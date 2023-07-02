import React from "react";
import { useSelector } from "react-redux";
import PatientItem from "./PatientItem";

function PatientsList() {
  const patients = useSelector((state) => state.patients);
  const sortedPatients = [...patients].sort(function (a, b) {
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
  console.log(sortedPatients);
  // sort by surname, then sort same surnames by name

  const patientsList = sortedPatients.map(
    ({ name, surname, phone, email, birthyear }, index) => (
      <PatientItem
        name={name}
        surname={surname}
        phone={phone}
        email={email}
        birthyear={birthyear}
        key={index}
      />
    )
  );
  console.log(patientsList);

  return (
    <div>
      <h2>All patients:</h2>
      <ul>{patientsList}</ul>
    </div>
  );
}

export default PatientsList;
