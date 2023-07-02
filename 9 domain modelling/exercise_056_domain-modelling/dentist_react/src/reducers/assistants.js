import assistants from "../data/assistantsData";

const assistantsReducer = (state = assistants, action) => {
  switch (action.type) {
    case "ADD_ASSISTANT":
      return [...state, action.payload];

    case "MARK_ASSISTANT_ILL":
      const assistants = [...state];
      const markAssistantIll = (assistant) => {
        if (
          assistant.name === action.payload.name &&
          assistant.surname === action.payload.surname
        ) {
          return { ...assistant, ill: "yes" };
        } else {
          return assistant;
        }
      };
      const newState = assistants.map((assistant) =>
        markAssistantIll(assistant)
      );
      return newState;

    default:
      return state;
  }
};

export default assistantsReducer;
