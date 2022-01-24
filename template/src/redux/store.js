import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import reducers from "./reducers";

const persistConfig = {
  key: "cryptosup",
  storage: storage,
  whitelist: ["counter"],
  transforms: [
    encryptTransform({ secretKey: process.env.REACT_APP_PERSIST_KEY }),
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
