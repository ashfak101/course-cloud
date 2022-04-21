import { Box, Typography } from "@mui/material"
type Option ={
    id:string;
    option:string;
    isCorrect:boolean;
}

type Quiz ={
    questionId:string;
    question:string;
    options:Option[];
    selectedAnswer:Option;
    level:string
}
type Props ={
    answer:Quiz[]
    correctAnswerArray:string[]
}
const QuizResultHeader = (props:Props) => {
    const {answer,correctAnswerArray}=props
  return (
    <Box sx={{background: "linear-gradient(180deg, rgba(255, 255, 255, 0.25) 51.22%, rgba(255, 255, 255, 0) 127.72%), #ED3B45",px:2,color:"#fff", height:"50px", display: 'flex',justifyContent: 'space-between',alignItems: 'center',borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}>
       <Typography>{correctAnswerArray.length} /{ answer.length} answer</Typography>

       { 
        correctAnswerArray.length > 5 ? <Typography> Quiz Pass</Typography>:<Typography> Quiz Fail</Typography>
       }
    
    </Box>
  )
}

export default QuizResultHeader