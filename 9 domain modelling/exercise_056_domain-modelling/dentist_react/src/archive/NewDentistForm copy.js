import React, { useState } from "react"; // useState nodig?
import { useSelector, useDispatch } from "react-redux";
import { addNewDentist } from "../actions";
import useForm from "../../hooks/useForm";

function NewDentistForm() {
  const dentists = useSelector((state) => state.dentists);
  const dispatch = useDispatch();

  // form resetten, hoe?
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const resetForm = (e) => {
    setName("");
    setSurname("");
    setPhone("");
    setEmail("");
  };
  // einde vraag

  const [values, handleChange] = useForm({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });

  const findDentists = (newDentist) => {
    const matchingDentists = dentists.filter(
      (dentist) =>
        dentist.name === newDentist.name &&
        dentist.surname === newDentist.surname
    );
    return matchingDentists;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDentist = { ...values };
    const newDentistFullName = `${values.name} ${values.surname}`;
    const matchingDentists = findDentists(newDentist);
    const matchFound = matchingDentists.length > 0;

    if (matchFound) {
      alert(`${newDentistFullName} is already registered as a dentist`);
    }
    if (!matchFound) {
      dispatch(addNewDentist(newDentist));
      alert(`${newDentistFullName} is now registered as a dentist`);
      resetForm(e);
    }
  };

  return (
    <div>
      <h3>New dentist:</h3>
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

        <button>Add New Dentist</button>
      </form>
    </div>
  );
}

export default NewDentistForm;
