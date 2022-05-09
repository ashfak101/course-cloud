const initialState = {
  submittedAns: [],
  shuffleArray: [],
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
    default:
      return state;
  }
};
