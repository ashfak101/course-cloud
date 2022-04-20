import Quiz from "models/quizModels";
import { Action } from "../actions";

interface QuizState {
    loading: boolean;
    error:string|null;
    data:Quiz[]|null
}
const initialState ={
    loading:false,
    error:null,
    data:null
}

export const quizReducer=(state:QuizState =initialState,action: Action)=>{

}