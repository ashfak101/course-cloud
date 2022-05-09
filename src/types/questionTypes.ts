export interface QuestionsCC {
  id: number;
  question: string;
  options: Option[];
  right_answer: number;
  level: Level;
}

export enum Level {
  Advanced = "advanced",
  Beginner = "beginner",
  Intermediate = "intermediate",
}

export interface Option {
  id: number;
  option: string;
  checked?: boolean;
  correct?: boolean;
}
