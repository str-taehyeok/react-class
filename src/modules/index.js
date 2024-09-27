import { combineReducers } from "redux";
import count from "./count";
import font from "./font";

const rootReducer = combineReducers({
  font,
  count
})

export default rootReducer;