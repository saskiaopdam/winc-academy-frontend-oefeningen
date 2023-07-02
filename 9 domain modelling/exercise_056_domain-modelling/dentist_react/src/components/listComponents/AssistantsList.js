import React from "react";
import { useSelector } from "react-redux";
import AssistantItem from "./AssistantItem";

function AssistantsList() {
  const assistants = useSelector((state) => state.assistants);
  const sortedAssistants = [...assistants].sort(function (a, b) {
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
  console.log(sortedAssistants);
  // sort by surname, then sort same surnames by name

  const assistantsList = sortedAssistants.map(
    ({ name, surname, phone, email }, index) => (
      <AssistantItem
        name={name}
        surname={surname}
        phone={phone}
        email={email}
        key={index}
      />
    )
  );
  console.log(assistantsList);

  return (
    <div>
      <h2>All assistants:</h2>
      <ul>{assistantsList}</ul>
    </div>
  );
}

export default AssistantsList;
