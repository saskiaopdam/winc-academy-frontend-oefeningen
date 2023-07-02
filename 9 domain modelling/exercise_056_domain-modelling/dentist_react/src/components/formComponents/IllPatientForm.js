import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelPatient } from "../../actions";

import { NameInput, SurnameInput } from "./Inputs";

function IllPatientForm() {
  const appointments = useSelector((state) => state.appointments);
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [appointmentsFound, setAppointmentsFound] = useState("");
  const [fullName, setFullName] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const resetForm = (event) => {
    setName("");
    setSurname("");
  };

  const findAppointments = (illPatient) => {
    const foundAppointments = appointments.filter(
      (appointment) =>
        appointment.patient === `${illPatient.name} ${illPatient.surname}`
    );
    console.log(foundAppointments);
    return foundAppointments;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const illPatient = { name, surname };
    console.log(illPatient);
    setFullName(`${illPatient.name} ${illPatient.surname}`);

    const hasAppointments = findAppointments(illPatient).length > 0;
    setAppointmentsFound(hasAppointments);

    if (hasAppointments) {
      const illPatientFullName = `${illPatient.name} ${illPatient.surname}`;
      dispatch(cancelPatient(illPatientFullName));
      console.log(illPatientFullName);
      resetForm(event);
    }
  };

  return (
    <div className="illPatientForm">
      <h2>Ill patient:</h2>
      {/* <p className="formHeader">Ill patient:</p> */}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <NameInput
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <SurnameInput
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
        <small>* Required field</small>
        <button>Cancel Patient</button>
      </form>
      <div className="submitMessage">
        {!formSubmitted ? (
          <small>
            Clicking the button will delete all appointments with the ill
            patient.
          </small>
        ) : null}

        {formSubmitted && appointmentsFound ? (
          <small>
            All appointments with patient {fullName} are now cancelled.
          </small>
        ) : formSubmitted && !appointmentsFound ? (
          <small>No appointments were found with patient {fullName}.</small>
        ) : null}
      </div>
    </div>
  );
}

export default IllPatientForm;
