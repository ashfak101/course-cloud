import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "redux/reducers";
import { QuestionsCC } from "types/questionTypes";
import _ from "lodash";
import QuizAnalysis from "./QuizAnalysis";
import ResultAccordionHeader from "./ResultAccordionHeader";

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
    <Container sx={{ my: 5 }}>
      {/*  */}

      <Accordion sx={{ background: "#0f0f0f", color: "#fff" }}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <ResultAccordionHeader
            userScore={userScore}
            quizAnswers={quizAnswers}
          />
        </AccordionSummary>
        <AccordionDetails>
          <QuizAnalysis result={quizAnswers} />
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default ResultQuizCC;
