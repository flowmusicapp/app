import { combineReducers } from "redux";
import CommonReducer from "./Common";
import ContactsReducer from "./Contacts";
import AuthReducer from "./Auth";

const rootReducer = combineReducers({
  CommonReducer: CommonReducer,
  ContactsReducer: ContactsReducer,
  AuthReducer: AuthReducer
});

export default rootReducer;
