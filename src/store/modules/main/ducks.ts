import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

import { DucksType, updateMonthsAction, updateLoadingAction } from "./@types";

const { Types, Creators } = createActions({
  updateMonths: ["months"],
  balanceNavigation: null,
  changingLoading: ["value"],
  spedingRequest: ["name", "amount", "date", "installment"],
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable<DucksType>({
  months: [
    { name: "Janeiro", amount: 0 },
    { name: "Fevereiro", amount: 0 },
    { name: "Março", amount: 0 },
    { name: "Abril", amount: 0 },
    { name: "Maio", amount: 0 },
    { name: "Junho", amount: 0 },
    { name: "Julho", amount: 0 },
    { name: "Agosto", amount: 0 },
    { name: "Setembro", amount: 0 },
    { name: "Outubro", amount: 0 },
    { name: "Novembro", amount: 0 },
    { name: "Dezembro", amount: 0 },
  ],
  loading: false,
});

type INITIAL_STATE_TYPE = typeof INITIAL_STATE;

const updateMonths = (
  state: INITIAL_STATE_TYPE,
  action: updateMonthsAction
): INITIAL_STATE_TYPE => {
  const { months } = action;
  return {
    ...state,
    months,
  };
};

const updateLoading = (
  state: INITIAL_STATE_TYPE,
  action: updateLoadingAction
): INITIAL_STATE_TYPE => {
  const { loading } = action;
  return {
    ...state,
    loading,
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_MONTHS]: updateMonths,
  [Types.CHANGING_LOADING]: updateLoading,
});
