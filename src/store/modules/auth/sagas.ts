import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "./ducks";
import history from "~/services/history";

function* signIn() {
  yield history.push("/");
}

export default all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)]);
