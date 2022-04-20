import { combineReducers } from "redux";

import { quizReducer } from "./quizReducer";
const reducers =combineReducers({
    quizs:quizReducer
})

export default reducers