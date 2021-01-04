import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

import { DucksType, updateMonthsAction } from "./@types";

const { Types, Creators } = createActions({
  updateMonths: ["months"],
  balanceNavigation: null,
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

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_MONTHS]: updateMonths,
});
