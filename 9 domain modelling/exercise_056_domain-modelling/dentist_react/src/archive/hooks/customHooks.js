import { useState } from "react";

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    },
  ];
}

function useReset(initialValues) {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (event) => {
      setValues({
        ...values,
        [event.target.name.name]: "",
        [event.target.surname.name]: "",
        [event.target.phone.name]: "",
        [event.target.email.name]: "",
      });
    },
  ];
  // How to make one line like in r.9 for multiple inputfields?
  // Couldn't figure out how to do this ...
}

export { useForm, useReset };
