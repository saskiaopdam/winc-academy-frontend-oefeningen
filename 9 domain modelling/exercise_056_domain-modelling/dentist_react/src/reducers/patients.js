import patients from "../data/patientsData";

const patientsReducer = (state = patients, action) => {
  switch (action.type) {
    case "ADD_PATIENT":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default patientsReducer;
