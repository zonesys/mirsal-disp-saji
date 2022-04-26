import { combineReducers } from "redux";
import accountReducer from "./AccountReducer";
import apiReducer from "./ApiReducer";

export default combineReducers({
  account: accountReducer,
  api: apiReducer
});
