import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPatient } from "../../actions";
// import { useForm, useReset } from "../../hooks/customHooks";

// I tried to use custom hooks - see archives - but found they only complicated the code while not improving it in any way. Also I couldn't get useReset working. So I decided to stick with useState, and the code is now simple, short and easy to understand without scrolling.

import {
  NameInput,
  SurnameInput,
  PhoneInputPatient,
  EmailInputPatient,
  BirthyearInput,
} from "./Inputs";

function NewPatientForm() {
  const patients = useSelector((state) => state.patients);
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [patientRegistered, setPatientRegistered] = useState("");
  const [fullName, setFullName] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthyear, setBirthyear] = useState("");

  const resetForm = (event) => {
    setName("");
    setSurname("");
    setPhone("");
    setEmail("");
    setBirthyear("");
  };

  const findPatients = (newPatient) => {
    const foundPatients = patients.filter(
      (patient) =>
        patient.name === newPatient.name &&
        patient.surname === newPatient.surname
    );
    return foundPatients;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const newPatient = { name, surname, phone, email, birthyear };
    setFullName(`${newPatient.name} ${newPatient.surname}`);

    const isRegistered = findPatients(newPatient).length > 0;
    setPatientRegistered(isRegistered);

    if (!isRegistered) {
      dispatch(addPatient(newPatient));
      resetForm(event);
    }
  };

  return (
    <div className="newPatientForm">
      <h2>New patient:</h2>
      {/* <p className="formHeader">New patient:</p> */}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <NameInput
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <SurnameInput
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
        <PhoneInputPatient
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <EmailInputPatient
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <BirthyearInput
          value={birthyear}
          onChange={(event) => setBirthyear(event.target.value)}
        />
        <small>* Required field</small>
        <button>Add Patient</button>
      </form>
      <div className="submitMessage">
        {formSubmitted && patientRegistered ? (
          <p>{fullName} is already registered as a patient.</p>
        ) : formSubmitted && !patientRegistered ? (
          <p>{fullName} is now registered as a patient.</p>
        ) : null}
      </div>
    </div>
  );
}

export default NewPatientForm;
