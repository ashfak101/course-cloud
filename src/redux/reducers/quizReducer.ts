type Option = {
  id: string;
  option: string;
  isCorrect: boolean;
};

type Quiz = {
  questionId: string;
  question: string;
  options: Option[];
  selectedAnswer: Option;
  level: string;
};

interface QuizState {
  finalAnswer: Quiz[];
}
const initialState = {
  finalAnswer: [],
};
type Action = {
  type: string;
  payload: Quiz[];
};

// const unChecked = arr.find(a => a.id === e.target.value)
//             arr.splice(arr.indexOf(unChecked), 1)
// arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);
// state.finalAnswer.map(obj=> action.payload.find(o=>o.questionId === obj.questionId)|| obj)

export const quizReducer = (
  state: QuizState = initialState,
  action: Action
): QuizState => {
  switch (action.type) {
    case "SUBMIT_QUIZ":
      return {
        ...state,
        finalAnswer: action.payload,
      };
    default:
      return state;
  }
};
