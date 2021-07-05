import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import formReducer from "./form/form-reducer";

const rootReducer = combineReducers({
  contacts: formReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
