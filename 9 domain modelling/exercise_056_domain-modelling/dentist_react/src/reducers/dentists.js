import dentists from "../data/dentistsData";

const dentistsReducer = (state = dentists, action) => {
  switch (action.type) {
    case "ADD_DENTIST":
      return [...state, action.payload];

    case "MARK_DENTIST_ILL":
      const dentists = [...state];
      const markDentistIll = (dentist) => {
        if (
          dentist.name === action.payload.name &&
          dentist.surname === action.payload.surname
        ) {
          return { ...dentist, ill: "yes" };
        } else {
          return dentist;
        }
      };
      const newState = dentists.map((dentist) => markDentistIll(dentist));
      return newState;

    default:
      return state;
  }
};

export default dentistsReducer;
