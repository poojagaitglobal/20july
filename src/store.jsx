import {  applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import taskreducer from "./reducer/taskreducer";

const reducer = combineReducers({
    taskreducer,
})

const store = configureStore({
    reducer,
} 
);

export default store;







