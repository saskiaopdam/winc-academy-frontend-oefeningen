import React from "react";
import "../../styles/Calendar.css";
import DayInMonth from "./DayInMonth";
import { useSelector } from "react-redux";

const divideByDay = (appointments) => {
  const appointmentsByDay = {};
  appointments.forEach((appointment) => {
    const day = appointment.day;
    if (!appointmentsByDay.hasOwnProperty(day)) {
      appointmentsByDay[day] = [];
    }
    appointmentsByDay[day].push(appointment);
  });
  return appointmentsByDay;
};

function Calendar() {
  const appointments = useSelector((state) => state.appointments);
  const appointmentsByDay = divideByDay(appointments);

  const daysInMonthJSX = Object.values(appointmentsByDay).map(
    (appointmentsInDay, index) => (
      <DayInMonth appointmentsInDay={appointmentsInDay} key={index} />
    )
  );
  console.log(daysInMonthJSX);
  return (
    <div className="calendarview">
      <div className="header">
        <div>Maandag</div>
        <div>Dinsdag</div>
        <div>Woensdag</div>
        <div>Donderdag</div>
        <div>Vrijdag</div>
      </div>
      <div className="table">{daysInMonthJSX}</div>
    </div>
  );
}

export default Calendar;
