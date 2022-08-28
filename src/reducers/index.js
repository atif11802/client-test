import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
	islogged: loggedReducer,
});

export default allReducers;
