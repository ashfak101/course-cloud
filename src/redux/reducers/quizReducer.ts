import { type } from "os";

type Option ={
    id:string;
    option:string;
    isCorrect:boolean;
}

type Quiz ={
    questioonId:string;
    question:string;
    options:Option[];
    selectedAnswer:Option;
    level:string
}

interface QuizState {
    finalAnswer:Quiz[]|null
}
const initialState ={
  
    finalAnswer:null
}
type Action ={
    type:string;
    payload:Quiz[]
}
export const quizReducer=(state:QuizState=initialState,action:Action):QuizState=>{
        switch(action.type){
            case  "SUBMIT_QUIZ":
                return{
                    ...state,
                    finalAnswer:action.payload
                }     
            default :
                return state    
        }
}