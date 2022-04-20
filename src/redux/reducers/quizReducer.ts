
interface QuizState {
    loading: boolean;
    finalAnswer:{}[] |null
}
const initialState ={
    loading:true,
    finalAnswer:null
}

export const quizReducer=(state:QuizState =initialState,action:any):QuizState=>{
        switch(action.type){
         
            case  "SUMBIT_QUIZ":
                return{
                    ...state,
                    loading:false,
                    finalAnswer:action.payload
                }     
            default :
                return state    
        }
}