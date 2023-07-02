import React from "react";

const format_time = (time) => (time < 10 ? `0${time}:00u` : `${time}:00u`);

const highlightPink = {
  backgroundColor: "hotpink",
};
const highlightGray = {
  backgroundColor: "lightgray",
};

function AppointmentInDay({ time, patient, dentist, assistant }) {
  const dentistIll = dentist === "";
  const assistantIll = assistant === "";

  return (
    <li
      className="appointment"
      style={
        dentistIll
          ? highlightPink
          : assistantIll
          ? highlightGray
          : dentistIll && assistantIll
          ? highlightPink
          : null
      }
    >
      <div className="time">{format_time(time)}</div>
      <div className="patient">Patiënt: {patient}</div>

      <div className="dentist">
        <span>Tandarts: </span>
        {dentistIll ? <span>{dentist}*</span> : <span>{dentist}</span>}
      </div>

      <div className="assistant">
        <span>Assistent: </span>
        {assistantIll ? <span>{assistant}*</span> : <span>{assistant}</span>}
      </div>

      {dentistIll && assistantIll ? (
        <div className="dentist">
          <small>* Dentist and assistant are both ill.</small>
        </div>
      ) : dentistIll ? (
        <div className="dentist">
          <small>* Dentist is ill.</small>
        </div>
      ) : assistantIll ? (
        <div className="assistant">
          <small>* Assistant is ill.</small>
        </div>
      ) : null}
    </li>
  );
}
export default AppointmentInDay;
