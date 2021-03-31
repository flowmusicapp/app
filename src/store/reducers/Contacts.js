const initialState = {
    contacts: null
  };
  
  const ContactsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GETTING_CONTACTS":
        return {
          ...state,
          contacts: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default ContactsReducer;
  