import { Container } from "@mui/material";
import Quiz from "models/quizModels";
import { useState } from "react";
import { useSelector } from "react-redux"
import { State } from "redux/reducers";
import Answer from "./Answer";
import QuizResultHeader from "./QuizResultHeader";

type AnswerArray={
    questionId:string;
    question:string;
    options:{}[];
    selectedAnswer:{};
    level:string

}

const ResultsHome = () => {
    
    const answer= useSelector((state:State)=>state.allAnswer.finalAnswer)
    const [level,setLevel]=useState('')
    let beginner:number = 0;
    let intermediate:number = 0;
    let advanced:number = 0;
    let correctAnswerArray:string[]=[];
    console.log(Array(answer));
    
    answer?.forEach((element)=>{
            element.options.forEach((option)=>{
                if(option.isCorrect && element.selectedAnswer.isCorrect){
                    correctAnswerArray.push(option.option)
                    // quizAnswerlevel.push(element.level)
                }
            })
    })
    console.log(correctAnswerArray);
    
    
  return (
    <Container>
        <QuizResultHeader answer={answer} correctAnswerArray={correctAnswerArray}/>
        <Answer answer={answer}></Answer>
    </Container>
  )
}

export default ResultsHome