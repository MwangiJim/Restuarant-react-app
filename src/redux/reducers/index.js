import { combineReducers } from "redux";
import { orderReducer } from "./reducers";

export const reducers = combineReducers({
    orderProducts:orderReducer
})