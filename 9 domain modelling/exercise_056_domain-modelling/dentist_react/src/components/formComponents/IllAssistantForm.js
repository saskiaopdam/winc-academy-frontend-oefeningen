import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelAssistant, markAssistantIll } from "../../actions";

import { NameInput, SurnameInput } from "./Inputs";

function IllAssistantForm() {
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

  const findAppointments = (illAssistant) => {
    const foundAppointments = appointments.filter(
      (appointment) =>
        appointment.assistant === `${illAssistant.name} ${illAssistant.surname}`
    );
    console.log(foundAppointments);
    return foundAppointments;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const illAssistant = { name, surname };
    console.log(illAssistant);
    setFullName(`${illAssistant.name} ${illAssistant.surname}`);

    const hasAppointments = findAppointments(illAssistant).length > 0;
    setAppointmentsFound(hasAppointments);

    if (hasAppointments) {
      const illAssistantFullName = `${illAssistant.name} ${illAssistant.surname}`;
      dispatch(markAssistantIll(illAssistant)); // nieuw
      dispatch(cancelAssistant(illAssistantFullName));
      console.log(illAssistantFullName);
      resetForm(event);
    }
  };

  return (
    <div className="illAssistantForm">
      <h2>Ill assistant:</h2>
      {/* <p className="formHeader">Ill assistant:</p> */}
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
        <button>Cancel Assistant</button>
      </form>
      <div className="submitMessage">
        {!formSubmitted ? (
          <small>
            Clicking the button will mark all appointments with the ill dentist.
          </small>
        ) : null}

        {formSubmitted && appointmentsFound ? (
          <small>
            All appointments with assistant {fullName} are now marked in the
            views.
          </small>
        ) : formSubmitted && !appointmentsFound ? (
          <small>No appointments were found with assistant {fullName}.</small>
        ) : null}
      </div>
    </div>
  );
}

export default IllAssistantForm;
