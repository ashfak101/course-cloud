import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "redux/reducers";
import { QuestionsCC } from "types/questionTypes";
import _ from "lodash";
import QuizAnalysis from "./QuizAnalysis";
import ResultAccordionHeader from "./ResultAccordionHeader";

type QuizProps = {
  quizAnswers: QuestionsCC[];
};
type Option = {
  checked: boolean,
  id: number,
  option: string
  level: string
}
type sAnswer = {
  id: number,
  level: string,
  options: Option[],
  question: string,
  right_answer: number
}

const ResultQuizCC = ({ quizAnswers }: QuizProps) => {
  console.log(quizAnswers);
  const submittedAnswers = useSelector(
    (state: State) => state.quizCCResult.submittedAns
  );
  const [quizLevel, setQuizLevel] = useState('');
  // console.log("from submittedAnswers ", submittedAnswers);
  // console.log("from Database: answers ", quizAnswers);

  const quizCalculation = () => {
    let score = 0;

    quizAnswers.forEach((question, index1) => {
      let correctIndexes: number[] = [];
      let checkedIndexes: number[] = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (submittedAnswers[index1]?.options[index2].checked) {
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
  console.log(submittedAnswers);

  let arr: Option[] = []
  let beginner = 0
  let intermediate = 0
  let advanced = 0
  submittedAnswers.forEach((element: sAnswer) => {
    element.options.forEach((option: Option) => {
      if (element.right_answer === option.id && option.checked === true) {
        option.level = element.level;

        arr.push(option);
      }
    });

  });

  arr.forEach((element) => {
    if (element.level === 'beginner') {
      beginner++;
    }
    if (element.level === 'intermediate') {
      intermediate++
    }
    if (element.level === 'advanced') {
      advanced++
    }
  });
  useEffect(() => {
    if (beginner > intermediate || beginner > advanced) {
      setQuizLevel("beginner");
    } else if (
      intermediate > beginner ||
      intermediate > advanced
    ) {
      setQuizLevel("intermediate");
    } else if (
      advanced > beginner ||
      advanced > intermediate
    ) {
      setQuizLevel("advanced");
    } else {
      setQuizLevel(" ");
    }
  }, [beginner, intermediate, advanced])
  console.log(beginner)
  console.log(intermediate)
  console.log(advanced)
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
