import React from "react";
import "../../styles/Day.css";
import AppointmentInDay from "./AppointmentInDay";
import { useSelector } from "react-redux";

function Day() {
  const appointments = useSelector((state) => state.appointments);
  const dayAppointments = appointments.filter((app) => app.day === 1);
  const appointmentsJSX = dayAppointments.map(
    ({ time, patient, dentist, assistant }, index) => (
      <AppointmentInDay
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        key={index}
      />
    )
  );
  return <ul className="dayview">{appointmentsJSX}</ul>;
}

export default Day;
