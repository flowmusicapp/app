const initialState = {
  loader: false,
  obj: null,
};

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_TOKEN_AND_ID":
      return {
        ...state,
        obj: action.payload,
      };
    default:
      return state;
  }
};

export default CommonReducer;
