import { combineReducers } from "redux";
import count from "./count";
import font from "./font";
import route from "./route";
import user from "./user";

const rootReducer = combineReducers({
  font,
  count,
  route,
  user
})

export default rootReducer;