import { Box, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
type Option = {
  id: string;
  option: string;
  isCorrect: boolean;
}

type Quiz = {
  questionId: string;
  question: string;
  options: Option[];
  selectedAnswer: Option;
  level: string
}
type Props = {
  answer: Quiz[]
  correctAnswerArray: string[]
}
const QuizResultHeader = (props: Props) => {
  const { answer, correctAnswerArray } = props
  return (
    <Box sx={{ background: "#282D37", px: 2, mt: 2, color: "#fff", height: "50px", display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopRightRadius: "10px", borderTopLeftRadius: "10px", width: "100%" }}>
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ fontSize: '25px', mr: 2, color: '#FBDE44' }}>{correctAnswerArray.length} /  {answer.length} </Typography>
        <Typography sx={{ mr: 5, fontSize: '25px' }} >   Click to see result</Typography>
      </Box>

      {
        correctAnswerArray.length > 5 ? <Typography sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', color: 'green' }}>   Quiz Pass  <ExpandMoreIcon /></Typography> : <Typography sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', color: 'red' }}> Quiz Fail <ExpandMoreIcon /></Typography>
      }

    </Box>
  )
}

export default QuizResultHeader