import allotuser from "./user";
import changeMenu from "./menuitem";
import addproject from "./projects";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ allotuser, changeMenu, addproject });

export default rootReducer;
