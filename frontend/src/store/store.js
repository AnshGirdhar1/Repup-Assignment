import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { contactReducer } from "./contacts/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  contact: contactReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
