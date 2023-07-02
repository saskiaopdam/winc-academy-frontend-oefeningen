import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

function DayInMonth({ appointmentsInDay }) {
  const appointmentsJSX = appointmentsInDay.map(
    (
      { time, patient, dentist, assistant, illDentist, illAssistant },
      index
    ) => (
      <AppointmentInMonth
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        illDentist={illDentist}
        illAssistant={illAssistant}
        key={index}
      />
    )
  );
  return <div className="day">{appointmentsJSX}</div>;
}

export default DayInMonth;
