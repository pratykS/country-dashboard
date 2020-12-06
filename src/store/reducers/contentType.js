const initialState = {
  type: "Table",
};

const typeSelector = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TYPE":
      return {
        ...state,
        type: action.contentType,
      };
    default:
      return state;
  }
};

export default typeSelector;
