import { Box, Button, Container, Typography } from "@mui/material";
import React, { Fragment, useEffect, useReducer, useState } from "react";
import { QuestionsCC } from "types/questionTypes";
import Answers from "./Answers";
import _ from "lodash";
import { useRouter, withRouter } from "next/router";
import { useDispatch } from "react-redux";

type QuizProps = {
  quizQuestions: QuestionsCC[];
};

const initialState = null;

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "QUESTIONS":
      action.payload.forEach((question: any) => {
        question.options.forEach((optionProps: any) => {
          optionProps.checked = false;
        });
      });
      return action.payload;

    case "ANSWER":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;

    default:
      return state;
  }
};

const QuizCCHome = ({ quizQuestions }: QuizProps) => {
  const router = useRouter();
  // console.log(quizQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);

  const reduxDispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "QUESTIONS",
      payload: quizQuestions,
    });
  }, [quizQuestions]);

  // console.log(qna);

  // handle checked unchecked answers ----------------
  const handleAnswerChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // console.log("dispating");
    dispatch({
      type: "ANSWER",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  // handle next question button
  const nextQuestion = () => {
    if (currentQuestion + 2 <= quizQuestions.length) {
      setCurrentQuestion((prevCurrentQues) => prevCurrentQues + 1);
    } else {
      // console.log("dispathing");
      reduxDispatch({
        type: "SUBMIT_ANSWERS",
        payload: qna,
      });

      router.push({
        pathname: "quiz-cc/result",
      });
    }
  };
  // handle prev question button
  const prevQuestion = () => {
    console.log("prev clicked");
    if (currentQuestion >= 1 && currentQuestion <= quizQuestions.length) {
      setCurrentQuestion((prevCurrentQues) => prevCurrentQues - 1);
    }
  };

  return (
    <Container sx={{ my: 10 }}>
      {qna ? (
        <Box sx={{ bgcolor: "#21252D", p: 4, borderRadius: "5px" }}>
          <Typography variant="h5">
            <Typography
              variant="h5"
              component="span"
              sx={{ bgcolor: "#D19F28", p: "2px 10px", borderRadius: "2px" }}
            >
              {currentQuestion + 1}
            </Typography>{" "}
            {qna[currentQuestion].question}
          </Typography>
          <Answers
            options={qna[currentQuestion]?.options}
            handleChange={handleAnswerChange}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={{
                bgcolor: "#D19F28",
                "&:hover": {
                  bgcolor: "black",
                },
              }}
              onClick={prevQuestion}
              variant="contained"
            >
              PREV
            </Button>
            <Button
              sx={{
                ml: 4,
                bgcolor: "#D19F28",
                "&:hover": {
                  bgcolor: "black",
                },
              }}
              onClick={nextQuestion}
              variant="contained"
            >
              {currentQuestion + 2 <= quizQuestions.length ? "Next" : "Submit"}
            </Button>
          </Box>
        </Box>
      ) : (
        <Fragment>Loading....</Fragment>
      )}
    </Container>
  );
};

export default QuizCCHome;
