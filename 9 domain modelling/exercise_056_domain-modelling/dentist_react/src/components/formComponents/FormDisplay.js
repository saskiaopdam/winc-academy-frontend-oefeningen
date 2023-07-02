import React from "react";
import NewDentistForm from "./NewDentistForm";
import NewAssistantForm from "./NewAssistantForm";
import NewPatientForm from "./NewPatientForm";
import IllDentistForm from "./IllDentistForm";
import IllAssistantForm from "./IllAssistantForm";
import IllPatientForm from "./IllPatientForm";

function FormDisplay(props) {
  const action = props.value;
  const addDentist = action === "addDentist";
  const addAssistant = action === "addAssistant";
  const addPatient = action === "addPatient";
  const cancelDentist = action === "cancelDentist";
  const cancelAssistant = action === "cancelAssistant";
  const cancelPatient = action === "cancelPatient";

  return (
    <div className="formDisplay">
      {addDentist ? (
        <NewDentistForm />
      ) : addAssistant ? (
        <NewAssistantForm />
      ) : addPatient ? (
        <NewPatientForm />
      ) : cancelDentist ? (
        <IllDentistForm />
      ) : cancelAssistant ? (
        <IllAssistantForm />
      ) : cancelPatient ? (
        <IllPatientForm />
      ) : null}
    </div>
  );
}

export default FormDisplay;
