export const getAllContacts = (contacts) => (dispatch, getState) => {
  dispatch({ type: "GETTING_CONTACTS", payload: contacts });
};
