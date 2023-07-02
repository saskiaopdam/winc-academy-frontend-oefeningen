import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelDentist, markDentistIll } from "../../actions";

import { NameInput, SurnameInput } from "./Inputs";

function IllDentistForm() {
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

  const findAppointments = (illDentist) => {
    const foundAppointments = appointments.filter(
      (appointment) =>
        appointment.dentist === `${illDentist.name} ${illDentist.surname}`
    );
    console.log(foundAppointments);
    return foundAppointments;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const illDentist = { name, surname };
    console.log(illDentist);
    setFullName(`${illDentist.name} ${illDentist.surname}`);

    const hasAppointments = findAppointments(illDentist).length > 0;
    setAppointmentsFound(hasAppointments);

    if (hasAppointments) {
      const illDentistFullName = `${illDentist.name} ${illDentist.surname}`;
      dispatch(markDentistIll(illDentist)); // nieuw
      dispatch(cancelDentist(illDentistFullName));
      console.log(illDentistFullName);
      resetForm(event);
    }
  };

  return (
    <div className="illDentistForm">
      <h2>Ill dentist:</h2>
      {/* <p className="formHeader">Ill dentist:</p> */}
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
        <button>Cancel Dentist</button>
      </form>

      <div className="submitMessage">
        {!formSubmitted ? (
          <small>
            Clicking the button will highlight all appointments with the ill
            dentist.
          </small>
        ) : null}

        {formSubmitted && appointmentsFound ? (
          <small>
            All appointments with dentist {fullName} are now highlighted in the
            views.
          </small>
        ) : formSubmitted && !appointmentsFound ? (
          <small>No appointments were found with dentist {fullName}.</small>
        ) : null}
      </div>
    </div>
  );
}

export default IllDentistForm;
