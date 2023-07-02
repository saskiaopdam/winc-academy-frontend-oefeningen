import React from "react";

const format_time = (time) => (time < 10 ? `0${time}:00u` : `${time}:00u`);

const highlightPink = {
  backgroundColor: "hotpink",
};
const highlightGray = {
  backgroundColor: "lightgray",
};

function AppointmentInMonth({ time, patient, dentist, assistant }) {
  const dentistIll = dentist === "";
  const assistantIll = assistant === "";

  return (
    <div
      className="appointment"
      style={dentistIll ? highlightPink : assistantIll ? highlightGray : null}
    >
      <span className="time">{format_time(time)}</span>
      <span className="patient">{patient}</span>

      {dentistIll ? (
        <div className="dentist">
          <small>Dentist is ill.</small>
        </div>
      ) : assistantIll ? (
        <div className="assistant">
          <small>Assistant is ill.</small>
        </div>
      ) : null}
    </div>
  );
}

export default AppointmentInMonth;
