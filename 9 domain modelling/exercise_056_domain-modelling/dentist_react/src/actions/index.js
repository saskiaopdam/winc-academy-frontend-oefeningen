export const addDentist = (newDentist) => {
  return {
    type: "ADD_DENTIST",
    payload: newDentist,
  };
};
export const addAssistant = (newAssistant) => {
  return {
    type: "ADD_ASSISTANT",
    payload: newAssistant,
  };
};
export const addPatient = (newPatient) => {
  return {
    type: "ADD_PATIENT",
    payload: newPatient,
  };
};

export const cancelDentist = (illDentist) => {
  return {
    type: "CANCEL_DENTIST_APPOINTMENTS",
    payload: illDentist,
  };
};
export const cancelAssistant = (illAssistant) => {
  return {
    type: "CANCEL_ASSISTANT_APPOINTMENTS",
    payload: illAssistant,
  };
};
export const cancelPatient = (illPatient) => {
  return {
    type: "CANCEL_PATIENT_APPOINTMENTS",
    payload: illPatient,
  };
};

export const markDentistIll = (illDentist) => {
  return {
    type: "MARK_DENTIST_ILL",
    payload: illDentist,
  };
}; // nieuw
export const markAssistantIll = (illAssistant) => {
  return {
    type: "MARK_ASSISTANT_ILL",
    payload: illAssistant,
  };
}; // nieuw

export const addAppointment = (newAppointment) => {
  return {
    type: "ADD_APPOINTMENT",
    payload: newAppointment,
  };
};
