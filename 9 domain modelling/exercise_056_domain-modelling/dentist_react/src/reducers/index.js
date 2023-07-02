import assistantsReducer from "./assistants";
import dentistsReducer from "./dentists";
import patientsReducer from "./patients";
import appointmentsReducer from "./appointments";
// import newDentistFormReducer from "./newDentistFormData";
// import newAssistantFormReducer from "./newAssistantFormData";
// import newPatientFormReducer from "./newPatientFormData";
// import illDentistFormReducer from "./illDentistFormData";
// import illAssistantFormReducer from "./illAssistantFormData";
// import illPatientFormReducer from "./illPatientFormData";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  assistants: assistantsReducer,
  dentists: dentistsReducer,
  patients: patientsReducer,
  appointments: appointmentsReducer,
  // newDentistFormData: newDentistFormReducer,
  // newAssistantFormData: newAssistantFormReducer,
  // newPatientFormData: newPatientFormReducer,
  // illDentistFormData: illDentistFormReducer,
  // illAssistantFormData: illAssistantFormReducer,
  // illPatientFormData: illPatientFormReducer,
});

export default allReducers;
