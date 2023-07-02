import React from "react";
import { useSelector } from "react-redux";
import AppointmentItem from "./AppointmentItem";

function AppointmentsList() {
  const appointments = useSelector((state) => state.appointments);

  const sortedAppointments = [...appointments].sort(function (a, b) {
    return a.day - b.day;
  });
  // const sortedByDay = [...appointments].sort(function (a, b) {
  //   return a.day - b.day;
  // });
  // const sortedByTime = [...appointments].sort(function (a, b) {
  //   return a.time - b.time;
  // });

  // sort by day, and then sort same days by time

  const appointmentsList = sortedAppointments.map(
    ({ day, time, patient, dentist, assistant }, index) => (
      <AppointmentItem
        day={day}
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        key={index}
      />
    )
  );
  console.log(appointmentsList);

  return (
    <div>
      <h2>All appointments:</h2>
      <ul>{appointmentsList}</ul>
    </div>
  );
}

export default AppointmentsList;
