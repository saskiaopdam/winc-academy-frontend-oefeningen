import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssistant } from "../../actions";
// import { useForm, useReset } from "../../hooks/customHooks";

// I tried to use custom hooks - see archives - but found they only complicated the code while not improving it in any way. Also I couldn't get useReset working. So I decided to stick with useState, and the code is now simple, short and easy to understand without scrolling.

import {
  NameInput,
  SurnameInput,
  PhoneInputEmployee,
  EmailInputEmployee,
} from "./Inputs";

function NewAssistantForm() {
  const assistants = useSelector((state) => state.assistants);
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [assistantRegistered, setAssistantRegistered] = useState("");
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

  const findAssistants = (newAssistant) => {
    const foundAssistants = assistants.filter(
      (assistant) =>
        assistant.name === newAssistant.name &&
        assistant.surname === newAssistant.surname
    );
    return foundAssistants;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const newAssistant = { name, surname, phone, email };
    setFullName(`${newAssistant.name} ${newAssistant.surname}`);

    const isRegistered = findAssistants(newAssistant).length > 0;
    setAssistantRegistered(isRegistered);

    if (!isRegistered) {
      dispatch(addAssistant(newAssistant));
      resetForm(event);
    }
  };

  return (
    <div className="newAssistantForm">
      <h2>New assistant:</h2>
      {/* <p className="formHeader">New assistant:</p> */}
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
        <button>Add Assistant</button>
      </form>
      <div className="submitMessage">
        {formSubmitted && assistantRegistered ? (
          <p>{fullName} is already registered as an assistant.</p>
        ) : formSubmitted && !assistantRegistered ? (
          <p>{fullName} is now registered as an assistant.</p>
        ) : null}
      </div>
    </div>
  );
}

export default NewAssistantForm;
