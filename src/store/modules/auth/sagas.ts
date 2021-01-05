import { all, takeLatest, call, put } from "redux-saga/effects";
import { AuthTypes } from "./ducks";
import { singIN } from "./@types";
import history from "~/services/history";
import { Post } from "~/services/api";

function* signIn({ email, password }: singIN) {
  try {
    const { data } = yield call(Post, "auth", { email, password });
    const { token } = data;
    yield put({ type: "SAVE_TOKEN", token });
    yield history.push("/");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}

export default all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)]);
