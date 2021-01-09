import { all, takeLatest, call, put, select } from "redux-saga/effects";
import { AuthTypes } from "./ducks";
import { Post } from "~/services/api";
import DefaultRootState from "~/store/@types";
import { spedingReducer } from "./@types";
// import history from "~/services/history";

function* navigation() {
  // const { auth, main } = yield select((state: DefaultRootState) => state);
  // const { token } = auth;
  // const { months } = main;
  try {
    // const { data } = yield call(Get, "installment", token);
    // type itemType = {
    //   valortotal: number;
    //   date: string;
    //   month: number;
    // };
    const months = [
      { name: "Janeiro", amount: 524.2 },
      { name: "Fevereiro", amount: 312 },
      { name: "Março", amount: 312 },
      { name: "Abril", amount: 312 },
      { name: "Maio", amount: 312 },
      { name: "Junho", amount: 312.02 },
      { name: "Julho", amount: 192 },
      { name: "Agosto", amount: 0 },
      { name: "Setembro", amount: 0 },
      { name: "Outubro", amount: 429.2 },
      { name: "Novembro", amount: 929.2 },
      { name: "Dezembro", amount: 1000 },
    ];
    // data.forEach((item: itemType) => {
    //   months[item.month - 1].amount = item.valortotal;
    // });

    yield put({ type: "UPDATE_MONTHS", months });
    // eslint-disable-next-line no-empty
  } catch (error) {}
}

function* speding({ name, amount, installment, date }: spedingReducer) {
  const { token } = yield select((state: DefaultRootState) => state.auth);
  yield put({ type: "CHANGING_LOADING", loading: true });
  try {
    const { status } = yield call(
      Post,
      "speding",
      { name, amount, installment, date },
      token
    );
    if (status === 200) {
      yield put({ type: "BALANCE_NAVIGATION" });
    }
    // eslint-disable-next-line no-empty
  } catch (error) {}
  yield put({ type: "CHANGING_LOADING", loading: false });
}

export default all([
  takeLatest(AuthTypes.BALANCE_NAVIGATION, navigation),
  takeLatest(AuthTypes.SPEDING_REQUEST, speding),
]);
