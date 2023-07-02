import React from "react";
import DentistsList from "./DentistsList";
import AssistantsList from "./AssistantsList";
import PatientsList from "./PatientsList";
import AppointmentsList from "./AppointmentsList";

function ListDisplay(props) {
  const display = props.value;
  const displayDentists = display === "displayDentists";
  const displayAssistants = display === "displayAssistants";
  const displayPatients = display === "displayPatients";
  const displayAppointments = display === "displayAppointments";

  return (
    <div className="listDisplay">
      {displayDentists ? (
        <DentistsList />
      ) : displayAssistants ? (
        <AssistantsList />
      ) : displayPatients ? (
        <PatientsList />
      ) : displayAppointments ? (
        <AppointmentsList />
      ) : null}
    </div>
  );
}

export default ListDisplay;
