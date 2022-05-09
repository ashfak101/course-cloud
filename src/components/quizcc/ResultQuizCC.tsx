import { Container, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "redux/reducers";
import { QuestionsCC } from "types/questionTypes";
import _ from "lodash";
import QuizAnalysis from "./QuizAnalysis";

type QuizProps = {
  quizAnswers: QuestionsCC[];
};

const ResultQuizCC = ({ quizAnswers }: QuizProps) => {
  const submittedAnswers = useSelector(
    (state: State) => state.quizCCResult.submittedAns
  );

  // console.log("from submittedAnswers ", submittedAnswers);
  // console.log("from Database: answers ", quizAnswers);

  const quizCalculation = () => {
    let score = 0;

    quizAnswers.forEach((question, index1) => {
      let correctIndexes: number[] = [];
      let checkedIndexes: number[] = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (submittedAnswers[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 1;
      }
    });
    return score;
  };

  const userScore = quizCalculation();

  return (
    <Container sx={{ my: 20 }}>
      <Typography variant="h3">
        Your Score is {userScore}/{quizAnswers.length}
      </Typography>
      <QuizAnalysis result={quizAnswers} />
    </Container>
  );
};

export default ResultQuizCC;
