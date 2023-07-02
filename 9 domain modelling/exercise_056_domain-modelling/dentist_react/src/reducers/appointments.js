import appointments from "../data/appointmentsData";

const appointmentsReducer = (state = appointments, action) => {
  switch (action.type) {
    case "ADD_APPOINTMENT":
      return [...state, action.payload];

    case "CANCEL_DENTIST_APPOINTMENTS":
      const markDentist = (appointment) => {
        if (appointment.dentist === action.payload) {
          return {
            ...appointment,
            dentist: "",
            illDentist: action.payload,
          };
        } else {
          return appointment;
        }
      };
      const illDentistUpdate = [...state].map((appointment) =>
        markDentist(appointment)
      );
      return illDentistUpdate;

    case "CANCEL_ASSISTANT_APPOINTMENTS":
      const markAssistant = (appointment) => {
        if (appointment.assistant === action.payload) {
          return {
            ...appointment,
            assistant: "",
            illAssistant: action.payload,
          };
        } else {
          return appointment;
        }
      };
      const illAssistantUpdate = [...state].map((appointment) =>
        markAssistant(appointment)
      );
      return illAssistantUpdate;

    case "CANCEL_PATIENT_APPOINTMENTS":
      console.log("action payload: " + action.payload);
      return [...state].filter(
        (appointment) => appointment.patient !== action.payload
      );

    default:
      return state;
  }
};

export default appointmentsReducer;
