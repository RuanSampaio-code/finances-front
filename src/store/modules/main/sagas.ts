import { all, takeLatest, call, put, select } from "redux-saga/effects";
import { AuthTypes } from "./ducks";
import { Get } from "~/services/api";
import DefaultRootState from "~/store/@types";
// import history from "~/services/history";

function* navigation() {
  const { auth, main } = yield select((state: DefaultRootState) => state);
  const { token } = auth;
  const { months } = main;
  try {
    const { data } = yield call(Get, "installment", token);
    type itemType = {
      valortotal: number;
      date: string;
      month: number;
    };
    data.forEach((item: itemType) => {
      months[item.month - 1].amount = item.valortotal;
    });

    yield put({ type: "UPDATE_MONTHS", months });
    // eslint-disable-next-line no-empty
  } catch (error) {}
}

export default all([takeLatest(AuthTypes.BALANCE_NAVIGATION, navigation)]);
