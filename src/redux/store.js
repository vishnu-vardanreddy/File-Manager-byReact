import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";  // Changed from import thunk from "redux-thunk"
import authReducer from "../reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,  // 'auth' represents the part of state managed by authReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;