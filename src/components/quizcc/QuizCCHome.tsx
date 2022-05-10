import { Box, Button, Container, Typography } from "@mui/material";
import React, { Fragment, useEffect, useReducer, useState } from "react";
import { QuestionsCC } from "types/questionTypes";
import Answers from "./Answers";
import _, { values } from "lodash";
import { useRouter, withRouter } from "next/router";
import { useDispatch } from "react-redux";

type QuizProps = {
  quizQuestions: QuestionsCC[];
};
type Time = number | string;
const initialState = null;

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "QUESTIONS":
      action.payload.forEach((question: any) => {
        question.submitTime=0;
        question.options.forEach((optionProps: any) => {
          optionProps.checked = false;
          
        });
      });
      return action.payload;

    case "ANSWER":
      const questions = _.cloneDeep(state);
      
      questions[action.questionID].options[action.optionIndex].checked =action.value;
      questions[action.questionID].submitTime =
        action.payload;
        
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
  const [time, setTime] = useState<number>(300)
  const [timeString, setTimeString] = useState<Time>()
  const [eachQuizTimer, setEachQuizTimer] = useState<number>(30);

  const [eachQuizTimerString, setEachQuizTimerString] = useState<Time>();

  let hours = Math.floor(time / 3600); // get hours
  let minutes = Math.floor((time - hours * 3600) / 60); // get minutes
  let seconds = time - hours * 3600 - minutes * 60; //  get seconds
  let hoursEachQuiz = Math.floor(eachQuizTimer / 3600); // get hours
  let minutesEachQuiz = Math.floor((eachQuizTimer - hoursEachQuiz * 3600) / 60)
  let secondsEachQuiz =
    eachQuizTimer - hoursEachQuiz * 3600 - minutesEachQuiz * 60; //  get seconds




  function convTime(hours: Time, minutes: Time, seconds: Time) {
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds; // Return is HH : MM : SS
  }
  // Function for each quiz timer
  function convTimeEachQuiz(hours: Time, minutes: Time, seconds: Time) {
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds; // Return is HH : MM : SS
  }
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    else {
      router.push({
        pathname: "quiz-cc/result",
      });
    }
    setTimeString(convTime(hours, minutes, seconds))
    return () => clearInterval(interval);

  }, [time, hours, minutes, seconds,router])

  useEffect(() => {
    let eachQuizTimeInterval:ReturnType<typeof setInterval>
    if (eachQuizTimer > 0) {
      eachQuizTimeInterval = setInterval(() => {
        setEachQuizTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      if (currentQuestion === qna.length - 1) {
        router.push({
          pathname: "quiz-cc/result",
        });
      } else {
        
        nextQuestion();
        setEachQuizTimer(30);
      }
    }

    setEachQuizTimerString(
      convTimeEachQuiz(hoursEachQuiz, minutesEachQuiz, secondsEachQuiz)
    );

    return () => clearInterval(eachQuizTimeInterval);
  }, [eachQuizTimer, hoursEachQuiz, minutesEachQuiz, secondsEachQuiz,qna,currentQuestion,router]);
  // handle next question button
const nextQuestion = () => {
  console.log(timeString)
  if (currentQuestion + 2 <= quizQuestions.length) {
    setCurrentQuestion((prevCurrentQues) => prevCurrentQues + 1);
    // // dispatch({
    // //   type:"ANSWER",
    // //   questionID: currentQuestion,
    // //   payload:eachQuizTimerString,
     
    // // })
    // console.log(dispatch({
    //   type:"ANSWER",
    //   questionID: currentQuestion,
    //   payload:eachQuizTimerString,
     
    // }))
    setEachQuizTimer(30);
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

  
  // handle prev question button
  const prevQuestion = () => {
    console.log("prev clicked");
    
    if (currentQuestion >= 1 && currentQuestion <= quizQuestions.length) {
      setCurrentQuestion((prevCurrentQues) => prevCurrentQues - 1);
    
    }
    // setEachQuizTimer(eachQuizTimerString)
  };
  
  console.log(qna)
  return (
    <Container sx={{ my: 10 }}>
      <Box>
        <Typography variant="h5" sx={{ my: 2 }} >Remaining Time:    {timeString}</Typography>
      </Box>
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
            {qna[currentQuestion].question}  {eachQuizTimerString}
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
              variant="contained"
              onClick={nextQuestion}
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
