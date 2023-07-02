import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDentist } from "../../actions";
// import { useForm, useReset } from "../../hooks/customHooks";

// I tried to use custom hooks - see archives - but found they only complicated the code while not improving it in any way. Also I couldn't get useReset working. So I decided to stick with useState, and the code is now simple, short and easy to understand without scrolling.

import {
  NameInput,
  SurnameInput,
  PhoneInputEmployee,
  EmailInputEmployee,
} from "./Inputs";

function NewDentistForm() {
  const dentists = useSelector((state) => state.dentists);
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dentistRegistered, setDentistRegistered] = useState("");
  const [fullName, setFullName] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const resetForm = (event) => {
    setName("");
    setSurname("");
    setPhone("");
    setEmail("");
  };

  const findDentists = (newDentist) => {
    const foundDentists = dentists.filter(
      (dentist) =>
        dentist.name === newDentist.name &&
        dentist.surname === newDentist.surname
    );
    return foundDentists;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const newDentist = { name, surname, phone, email };
    setFullName(`${newDentist.name} ${newDentist.surname}`);

    const isRegistered = findDentists(newDentist).length > 0;
    setDentistRegistered(isRegistered);

    if (!isRegistered) {
      dispatch(addDentist(newDentist));
      resetForm(event);
    }
  };

  return (
    <div className="newDentistForm">
      <h2>New dentist:</h2>
      {/* <p className="formHeader">New dentist:</p> */}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <NameInput
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <SurnameInput
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
        <PhoneInputEmployee
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <EmailInputEmployee
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <small>* Required field</small>
        <button>Add Dentist</button>
      </form>
      <div className="submitMessage">
        {formSubmitted && dentistRegistered ? (
          <p>{fullName} is already registered as a dentist.</p>
        ) : formSubmitted && !dentistRegistered ? (
          <p>{fullName} is now registered as a dentist.</p>
        ) : null}
      </div>
    </div>
  );
}

export default NewDentistForm;
