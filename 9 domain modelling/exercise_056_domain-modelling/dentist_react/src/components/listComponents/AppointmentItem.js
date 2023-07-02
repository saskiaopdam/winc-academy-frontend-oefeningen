import React from "react";

function AppointmentItem({ day, time, patient, dentist, assistant }) {
  return (
    <li>
      day: {day}, time: {time}, patient: {patient}, dentist: {dentist},
      assistant: {assistant}
    </li>
  );
}

export default AppointmentItem;
