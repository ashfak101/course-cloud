import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { quizCCReducer } from "./quizCCReducer";
import { quizReducer } from "./quizReducer";

const reducers = combineReducers({
  allAnswer: quizReducer,
  allCartItem: cartReducer,
  quizCCResult: quizCCReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
