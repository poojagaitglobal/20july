import { combineReducers } from "redux";
import taskreducer from "./taskreducer";

const rootReducer = combineReducers({
    data : taskreducer,
});

export default rootReducer;