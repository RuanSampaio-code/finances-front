/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
import { createStore, compose, applyMiddleware, Store, Action } from "redux";
import DefaultRootState from "./@types";

export default (
  reducers: any,
  middlewares: any[]
): Store<DefaultRootState, Action<any>> => {
  const enhancer = "__DEV__"
    ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
