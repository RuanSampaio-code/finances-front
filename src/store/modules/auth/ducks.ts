import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

import { DucksType, updateToken, updateIsLogged } from "./@types";

const { Types, Creators } = createActions({
  signInRequest: ["email", "password"],
  signUpRequest: ["name", "lastName", "email", "password"],
  signOut: null,
  saveToken: ["token"],
  setIsLogged: ["isLogged"],
  startLoadingButton: null,
  restartLoadingButton: null,
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable<DucksType>({
  token: "",
  isLogged: false,
  loadingButton: false,
});

type INITIAL_STATE_TYPE = typeof INITIAL_STATE;

const savingToken = (
  state: INITIAL_STATE_TYPE,
  action: updateToken
): INITIAL_STATE_TYPE => {
  const { token } = action;
  return { ...state, token };
};

const setIsLogged = (
  state: INITIAL_STATE_TYPE,
  action: updateIsLogged
): INITIAL_STATE_TYPE => {
  const { isLogged } = action;
  return { ...state, isLogged };
};

const startButton = (state: INITIAL_STATE_TYPE): INITIAL_STATE_TYPE => ({
  ...state,
  loadingButton: true,
});
const restartButton = (state: INITIAL_STATE_TYPE): INITIAL_STATE_TYPE => ({
  ...state,
  loadingButton: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: (state: INITIAL_STATE_TYPE) => state,
  [Types.SIGN_UP_REQUEST]: (state: INITIAL_STATE_TYPE) => state,
  [Types.SIGN_OUT]: (state: INITIAL_STATE_TYPE) => state,
  [Types.SAVE_TOKEN]: savingToken,
  [Types.SET_IS_LOGGED]: setIsLogged,
  [Types.START_LOADING_BUTTON]: startButton,
  [Types.RESTART_LOADING_BUTTON]: restartButton,
});
