import { Box, Button, Card, Container, Typography } from "@mui/material";
import Quiz from "models/quizModels";
import { useRouter } from "next/router";
import { type } from "os";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Question from "./Question";

type QuizProps = {
  quizs: Quiz[];
};
type Select = {
  id: string;
  option: string;
  isCorrect: boolean;
};
type Ans = {
  questionId: string;
  question: string;
  options: {}[];
  selectedAnswer: {};
  level: string;
};
type Time = number | string;

const QuizHome = (props: QuizProps) => {
  const quizs = props.quizs.slice(0, 10);
  const [index, setIndex] = useState<number>(0);
  const [showQuestion, setShowQuestion] = useState<boolean>(true);
  const [selectedAnswer, setSelectedAnswer] = useState<Array<Ans>>([]);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();

  let userSelectedAnswers: Ans[] = [];

  useEffect(() => {
    setShowQuestion(true);
    selectedAnswer.forEach((element) => {
      if (
        element.questionId ===
        userSelectedAnswers[userSelectedAnswers.length - 1]?.questionId
      ) {
        userSelectedAnswers.pop();
        userSelectedAnswers.push(element);
      } else {
        userSelectedAnswers.push(element);
      }

      let newArr = [...userSelectedAnswers];
      dispatch({
        type: "SUBMIT_QUIZ",
        payload: newArr,
      });
    });
  }, [
    index,
    isSubmitted,
    isSelected,
    selectedAnswer,
    dispatch,
    userSelectedAnswers,
  ]);
  const goNext = () => {
    setShowQuestion(false);
    setIsSelected(false);
    let currentIndex = index;
    currentIndex += 1;
    setIndex(currentIndex);
    setEachQuizTimer(30);
  };
  const goBack = () => {
    let currentIndex = index;
    currentIndex -= 1;
    setIndex(currentIndex);
    setEachQuizTimer(30);
    if (time < 270) {
      setTime((prevState) => prevState + 30);
    }
  };
  const handleOnChange = (option: {}) => {
    setIsSelected(true);

    const answer: Ans = {
      questionId: quizs[index].id,
      question: quizs[index].question,
      options: quizs[index].options,
      selectedAnswer: option,
      level: quizs[index].level,
    };
    // console.log(answer);
    const newArr = [...selectedAnswer, answer];
    setSelectedAnswer(newArr);
  };

  // console.log(quizs);
  const submitQuiz = () => {
    setIsSubmitted(true);
    router.push("/quiz/results");
  };
  const submitQuizTimer = () => {
    setIsSubmitted(true);
  };

  // Timer Function Start ------------------------------------------------------
  // ---------------------------------------------------------------------------
  const [time, setTime] = useState<number>(300);
  const [timeString, setTimeString] = useState<Time>();

  const [eachQuizTimer, setEachQuizTimer] = useState<number>(30);

  const [eachQuizTimerString, setEachQuizTimerString] = useState<Time>();

  let hours = Math.floor(time / 3600); // get hours
  let minutes = Math.floor((time - hours * 3600) / 60); // get minutes
  let seconds = time - hours * 3600 - minutes * 60; //  get seconds

  let hoursEachQuiz = Math.floor(eachQuizTimer / 3600); // get hours
  let minutesEachQuiz = Math.floor((eachQuizTimer - hoursEachQuiz * 3600) / 60); // get minutes
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
    let eachQuizTimeInterval: any;
    if (eachQuizTimer > 0) {
      eachQuizTimeInterval = setInterval(() => {
        setEachQuizTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      if (index === quizs.length - 1) {
        submitQuiz();
      } else {
        goNext();
        setEachQuizTimer(30);
      }
    }

    setEachQuizTimerString(
      convTimeEachQuiz(hoursEachQuiz, minutesEachQuiz, secondsEachQuiz)
    );

    return () => clearInterval(eachQuizTimeInterval);
  }, [eachQuizTimer, hoursEachQuiz, minutesEachQuiz, secondsEachQuiz]);

  useEffect(() => {
    let interval: any;

    if (time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      submitQuizTimer();
    }

    setTimeString(convTime(hours, minutes, seconds));

    return () => clearInterval(interval);
  }, [time, hours, seconds, minutes]);

  // ---------------------------------------------------------------------------
  // Timer Function End --------------------------------------------------------

  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
        }}
      >
        <Box sx={{ mb: 1, display: "flex", alignItems: "center" }}>
          <Typography component="span" sx={{ fontSize: "1.2rem", mr: 1 }}>
            Total Time Remaining:
          </Typography>
          <Typography component="span" sx={{ fontSize: "2.5rem" }}>
            {timeString}
          </Typography>
        </Box>
        {showQuestion && (
          <Card
            sx={{
              width: {
                xs: "100%",
                sm: "50%",
                md: "900px",
              },
              p: {
                xs: "2 2",
                sm: "2  2",
                md: "60px 80px",
              },
              boxShadow: "-8px 4px 19px 0 rgb(0 0 0 /12%)",
              borderRadius: "20px",
              mb: 5,
              background: "#21252D",
            }}
          >
            <Box
              sx={{
                textAlign: "left",
                color: "#fff",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "inline",
                  background: "#D19F28",
                  px: "6px",
                  py: "2px",
                  borderRadius: "4px",
                  color: "#fff",
                  mr: 1,
                }}
              >
                {index + 1}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6">{quizs[index]?.question}</Typography>
                <Typography
                  variant="h5"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography sx={{ fontSize: "12px" }}>
                    Each Quiz Time:
                  </Typography>{" "}
                  {eachQuizTimerString}
                </Typography>
              </Box>
            </Box>
            <Question
              index={index}
              quizs={quizs}
              handleOnChange={handleOnChange}
              time={time}
            />
            <Box
              sx={{ display: "flex", justifyContent: "space-around", py: 2 }}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: "26px", color: "#fff" }}
              >
                Question {index + 1}/{quizs.length}
              </Typography>
              {index > 0 && (
                <>
                  <Button
                    sx={{
                      background: "#D19F28",
                      px: { xs: 2, sm: 4, md: 6 },
                      fontSize: { xs: "16px", sm: "16px", md: "16px" },
                      fontWeight: "800",
                      color: "#fff",
                      "&:hover": { background: "#FBDE44" },
                    }}
                    variant="contained"
                    onClick={goBack}
                  >
                    Prev
                  </Button>
                </>
              )}
              {index === quizs.length - 1 ? (
                <Button
                  sx={{
                    background: "#D19F28",
                    px: { xs: 2, sm: 4, md: 6 },
                    fontSize: {
                      xs: "16px",
                      sm: "16px",
                      md: "16px",
                      fontWeight: "800",
                      color: "#fff",
                      "&:hover": { background: "#FBDE44" },
                    },
                  }}
                  onClick={submitQuiz}
                  // disabled={!isSelected}
                  variant="contained"
                >
                  Submit
                </Button>
              ) : (
                <Button
                  sx={{
                    background: "#D19F28",
                    px: { xs: 2, sm: 4, md: 6 },
                    fontSize: {
                      xs: "16px",
                      sm: "16px",
                      md: "16px",
                      fontWeight: "800",
                      color: "#fff",
                      "&:hover": { background: "#FBDE44" },
                    },
                  }}
                  onClick={goNext}
                  // disabled={index === quizs.length - 1 || !isSelected}
                >
                  Next
                </Button>
              )}
            </Box>
          </Card>
        )}
      </Container>
    </Box>
  );
};

export default QuizHome;
