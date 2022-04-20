import { Box,Typography } from "@mui/material"
import Quiz from "models/quizModels"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"


type QuizProps={
  quizs:Quiz[]
}
type Ans ={
  questionId:string,
  question:string,
  options:{}[],
  selectedAnswer:string,
  level:string
}

const QuizHome = (props:QuizProps) => {
  const quizs =props.quizs
  const [index, setIndex] = useState<number>(0);
  const [showQuestion, setShowQuestion] = useState<boolean>(true);
  const [selectedAnswer, setSelectedAnswer] = useState<Array<Ans>>([]);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const dispatch = useDispatch();
  let userSelectedAnswers:Ans[] = [];

  
  useEffect(()=>{
    setShowQuestion(true);
    selectedAnswer.forEach((element) => {
      if (element.questionId === userSelectedAnswers[userSelectedAnswers.length - 1]?.questionId) {
        userSelectedAnswers.pop();
        userSelectedAnswers.push(element);
      }
      else {
        userSelectedAnswers.push(element);
      }

      let newArr = [...userSelectedAnswers];
      dispatch({
        type: "SUBMIT_QUIZ",
        payload: newArr,
      });
    });
  },[ index,
    isSubmitted,
    isSelected,
    selectedAnswer,dispatch,userSelectedAnswers])
    const goNext = () => {
      setShowQuestion(false);
      setIsSelected(false);
      let currentIndex = index;
      currentIndex += 1;
      setIndex(currentIndex);
    };
    const goBack = () => {
      let currentIndex = index;
      currentIndex -= 1;
      setIndex(currentIndex);
    };
    const handleOnChange = (option:string) => {
      setIsSelected(true);
  
     
      const answer:Ans = {
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
   
  console.log(quizs);
  
  return (
    <Box>
         <Typography variant="h2">Hello from Quiz Page</Typography>
    </Box>
  )
}

export default QuizHome