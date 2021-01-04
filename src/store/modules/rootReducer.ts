import { combineReducers } from "redux";

import { reducer as auth } from "./auth/ducks";

export default combineReducers({
  auth,
});
