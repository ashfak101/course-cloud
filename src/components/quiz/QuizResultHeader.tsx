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
      <Typography sx={{ mr: 5 }}> <span style={{ fontSize: '25px' }}>{correctAnswerArray.length} /{answer.length}</span>  Click to see result</Typography>

      {
        correctAnswerArray.length > 5 ? <Typography sx={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>   Quiz Pass  <ExpandMoreIcon /></Typography> : <Typography> Quiz Fail <ExpandMoreIcon /></Typography>
      }

    </Box>
  )
}

export default QuizResultHeader