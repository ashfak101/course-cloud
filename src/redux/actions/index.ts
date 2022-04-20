
import Quiz from "models/quizModels";
import ActionType from "./action-type";

interface GetQuizRequestAction {
    type: ActionType.GET_QUIZ_REQUEST
}

interface GetQuizSuccessAction {
    type: ActionType.GET_QUIZ_SUCCESS;
    payload: Quiz[]
}
interface GetQuizFailAction{
    type: ActionType.GET_QUIZ_FAIL;
    payload:string
}


export type Action = GetQuizRequestAction | GetQuizSuccessAction | GetQuizFailAction