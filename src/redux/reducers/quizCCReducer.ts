const initialState = {
  submittedAns: [],
  shuffleArray: [],
  quizQuestions: [],
  quizAnswers: [],
};

export const quizCCReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case "SUBMIT_ANSWERS":
      return {
        ...state,
        submittedAns: action.payload,
      };
    case "SHUFFLE_ARRAY":
      return {
        ...state,
        shuffleArray: action.payload,
      };
    case "RANDOM_QUIZ_QUESTIONS":
      return {
        ...state,
        quizQuestions: action.payload,
      };
    case "RANDOM_QUIZ_ANSWERS":
      return {
        ...state,
        quizAnswers: action.payload,
      };
    default:
      return state;
  }
};
