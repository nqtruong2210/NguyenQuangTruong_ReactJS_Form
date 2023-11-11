import { combineReducers } from "redux";
import { exFormReducer } from "./ExForm/slice";

export const rootReducer = combineReducers({
  exForm: exFormReducer,
});
