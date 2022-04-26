import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";

import { quizReducer } from "./quizReducer";
const reducers =combineReducers({
    allAnswer:quizReducer,
    allCartItem:cartReducer
})

export default reducers


export type State = ReturnType<typeof reducers>