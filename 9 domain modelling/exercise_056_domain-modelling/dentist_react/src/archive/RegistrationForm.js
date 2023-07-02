import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewDentist, addNewAssistant, addNewPatient } from "../../actions";
import useForm from "../../hooks/useForm";

function RegistrationForm(props) {
  const dentists = useSelector((state) => state.dentists);
  const assistants = useSelector((state) => state.assistants);
  const patients = useSelector((state) => state.patients);
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [personRegistered, setPersonRegistered] = useState("");
  const [fullName, setFullName] = useState("");

  const [values, setValues] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    birthyear: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const resetForm = (event) => {
    setValues({
      ...values,
      [event.target.name.name]: "",
      [event.target.surname.name]: "",
      [event.target.phone.name]: "",
      [event.target.email.name]: "",
      [event.target.birthyear.name]: "",
    });
  };

  const status = props.value;
  // console.log(typeof status);
  // console.log(props);
  const dentist = status === "dentist";
  const assistant = status === "assistant";
  const patient = status === "patient";

  // const checkStateSlice = () => {
  //   if (dentist) {
  //     return dentists;
  //   }
  //   if (assistant) {
  //     return assistants;
  //   }
  //   if (patient) {
  //     return patients;
  //   }
  // };

  // const stateSlice = checkStateSlice();

  const findPersons = (newPerson) => {
    // if (status) {
    //   const foundPersons = stateSlice.filter(
    //     (status) =>
    //       status.name === newPerson.name && status.surname === newPerson.surname
    //   );
    //   return foundPersons;
    // }
    if (dentist) {
      const foundPersons = dentists.filter(
        (dentist) =>
          dentist.name === newPerson.name &&
          dentist.surname === newPerson.surname
      );
      return foundPersons;
    }
    if (assistant) {
      const foundPersons = assistants.filter(
        (assistant) =>
          assistant.name === newPerson.name &&
          assistant.surname === newPerson.surname
      );
      return foundPersons;
    }
    if (patient) {
      const foundPersons = patients.filter(
        (patient) =>
          patient.name === newPerson.name &&
          patient.surname === newPerson.surname
      );
      return foundPersons;
    }
  };

  const handleSubmit = (event) => {
    console.log(event.target.name);
    event.preventDefault();
    setFormSubmitted(true);

    const newPerson = { ...values };
    setFullName(`${newPerson.name} ${newPerson.surname}`);

    const isRegistered = findPersons(newPerson).length > 0;
    setPersonRegistered(isRegistered);

    if (!isRegistered) {
      if (dentist) {
        dispatch(addNewDentist(newPerson));
      }
      if (assistant) {
        dispatch(addNewAssistant(newPerson));
      }
      if (patient) {
        dispatch(addNewPatient(newPerson));
      }
      resetForm(event);
    }
  };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <h3>New {status}:</h3>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label className="inputLabel" htmlFor="name">
          Name:
        </label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Jaap van de"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          autoFocus
        />

        <label className="inputLabel" htmlFor="surname">
          Surname:
        </label>
        <input
          id="surname"
          type="text"
          placeholder="e.g. Velde"
          name="surname"
          value={values.surname}
          onChange={handleChange}
          required
        />

        <label className="inputLabel" htmlFor="phone">
          Phone:
        </label>
        <input
          id="phone"
          type="text"
          placeholder="e.g. 06-12345678"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          required
        />

        <label className="inputLabel" htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          type="text"
          placeholder="e.g. jaap@smiledentalclinic.nl"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />

        <label className="inputLabel" htmlFor="birthyear">
          Birthyear:
        </label>
        <input
          id="birthyear"
          type="text"
          placeholder="e.g. 1970"
          name="birthyear"
          value={values.birthyear}
          onChange={handleChange}
          required
        />

        <button>Add New {capitalize(status)}</button>
      </form>

      <div className="submitMessage">
        {formSubmitted && personRegistered ? (
          <p>
            {fullName} is already registered as a {status}.
          </p>
        ) : formSubmitted && !personRegistered ? (
          <p>
            {fullName} is now registered as a {status}.
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default RegistrationForm;
