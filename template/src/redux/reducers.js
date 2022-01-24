import { combineReducers } from "redux";

// import reducers here
import userReducer from "./slices/userSlice";

// combining reducers for the store
const reducers = combineReducers({
  user: userReducer,
});

export default reducers;
