import Quiz from "models/quizModels";
interface QuizState {
    loading: boolean;
    data:Quiz[]|null;
    finalAnswer:{}[] |null
}
const initialState ={
    loading:false,
    error:null,
    data:null,
    finalAnswer:null
}

export const quizReducer=(state:QuizState =initialState,action:any):QuizState=>{
        switch(action.type){
            case "Quiz":
                
                
            default :
                return state    
        }
}