import { combineReducers } from "redux";

import { reducer as auth } from "./auth/ducks";
import { reducer as main } from "./main/ducks";

export default combineReducers({
  auth,
  main,
});
