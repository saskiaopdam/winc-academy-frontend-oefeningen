import React from "react";

function NameInput(props) {
  return (
    <div>
      <label className="inputLabel" htmlFor="name">
        Name *
      </label>
      <input
        id="name"
        type="text"
        placeholder="e.g. Jaap van de"
        name="name"
        value={props.value}
        onChange={props.onChange}
        required
        autoFocus
      />
    </div>
  );
}

function SurnameInput(props) {
  return (
    <div>
      <label className="inputLabel" htmlFor="surname">
        Surname *
      </label>
      <input
        id="surname"
        type="text"
        placeholder="e.g. Velde"
        name="surname"
        value={props.value}
        onChange={props.onChange}
        required
      />
    </div>
  );
}

function PhoneInputEmployee(props) {
  return (
    <div>
      <label className="inputLabel" htmlFor="phone">
        Phone *
      </label>
      <input
        id="phone"
        type="text"
        placeholder="e.g. 06-12345678"
        name="phone"
        value={props.value}
        onChange={props.onChange}
        required
      />
    </div>
  );
}

function PhoneInputPatient(props) {
  return (
    <div>
      <label className="inputLabel" htmlFor="phone">
        Phone (optional)
      </label>
      <input
        id="phone"
        type="text"
        placeholder="e.g. 06-12345678"
        name="phone"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

function EmailInputEmployee(props) {
  return (
    <div>
      <label className="inputLabel" htmlFor="email">
        Email *
      </label>
      <input
        id="email"
        type="text"
        placeholder="e.g. jaap@smiledentalclinic.nl"
        name="email"
        value={props.value}
        onChange={props.onChange}
        required
      />
    </div>
  );
}
function EmailInputPatient(props) {
  return (
    <div>
      <label className="inputLabel" htmlFor="email">
        Email *
      </label>
      <input
        className="emailInput"
        id="email"
        type="text"
        placeholder="e.g. geert@mail.nl"
        name="email"
        value={props.value}
        onChange={props.onChange}
        required
      />
    </div>
  );
}

function BirthyearInput(props) {
  return (
    <div>
      <label className="inputLabel" htmlFor="birthyear">
        Birthyear *
      </label>
      <input
        id="birthyear"
        type="text"
        placeholder="e.g. 1970"
        name="birthyear"
        value={props.value}
        onChange={props.onChange}
        required
      />
    </div>
  );
}

function FullNameInput(props) {
  return (
    <div>
      <label className="inputLabel" htmlFor="fullName">
        Full name *
      </label>
      <input
        id="fullName"
        type="text"
        placeholder="e.g. Jaap van de Velde"
        name="fullName"
        value={props.value}
        onChange={props.onChange}
        required
        autoFocus
      />
    </div>
  );
}

function RelationSelector(props) {
  return (
    <label htmlFor="relation">
      Please select the relation type.{" "}
      <select
        id="relation"
        name="relation"
        value={props.value}
        onChange={props.onChange}
        required
      >
        <option value="">-- Select relation type --</option>
        <optgroup label="Employee">
          <option value="dentist">Dentist</option>
          <option value="assistant">Assistant</option>
        </optgroup>
        <optgroup label="Client">
          <option value="patient">Patient</option>
        </optgroup>
      </select>
    </label>
  );
}

export {
  NameInput,
  SurnameInput,
  FullNameInput,
  PhoneInputEmployee,
  PhoneInputPatient,
  EmailInputEmployee,
  EmailInputPatient,
  BirthyearInput,
  RelationSelector,
};
