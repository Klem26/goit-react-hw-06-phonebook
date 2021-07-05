import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import formReducer from "./form/form-reducer";

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: formReducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development",
});
export default store;
