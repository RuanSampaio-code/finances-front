import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: "marconcept",
      storage,
      blacklist: ["loading", "modal"],
    },
    reducers
  );

  return persistedReducer;
};
