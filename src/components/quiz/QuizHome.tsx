import { Box,Card,Container,Typography } from "@mui/material"
import Quiz from "models/quizModels"
import { type } from "os"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Question from "./Question"


type QuizProps={
  quizs:Quiz[]
}
type Select ={
  id:string,
  option:string,
  isCorrect:boolean
}
type Ans ={
  questionId:string,
  question:string,
  options:{}[],
  selectedAnswer:{},
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
    const handleOnChange = (option:{}) => {
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
   
  // console.log(quizs);
  
  return (
    <Box>
        <Container 
              sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

            <Typography variant="h2">Hello from Quiz Page</Typography>
              {
                showQuestion &&  <Card
                    sx={{width:{
                        xs:"100%",
                        sm:"50%",
                        md:"900px"
                    },
                    p:{
                      xs: "2 2",
                      sm: "2  2",
                      md: "60px 80px",
                    },
                    boxShadow:"-8px 4px 19px 0 rgb(0 0 0 /12%)",
                    borderRadius:"20px",
                    mb:5
                  }}
                >
                  <Typography variant="h6" sx={{ textAlign: "left" }}>
                          <Box
                            sx={{display: "inline",background: "red", px: "6px",py: "2px",
                              borderRadius: "4px",
                              color: "#fff",
                            }}
                          >
                             {quizs[index]?.id}
                          </Box>
                          . {quizs[index]?.question}
                      </Typography>
                      <Question index={index} quizs={quizs} handleOnChange= {handleOnChange}/>
                </Card>
              }
        </Container>
    </Box>
  )
}

export default QuizHome