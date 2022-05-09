const initialState = {
  submittedAns: [],
};

export const quizCCReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case "SUBMIT_ANSWERS":
      return {
        ...state,
        submittedAns: action.payload,
      };
    default:
      return state;
  }
};
