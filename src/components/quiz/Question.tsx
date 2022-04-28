import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  CircularProgress,
} from "@mui/material";
import Quiz from "models/quizModels";
import { type } from "os";
import { useState } from "react";

type QuestionProps = {
  index: number;
  quizs: Quiz[];
  handleOnChange: (option: {}) => void;
  time: number | boolean;
};

const Question = (props: QuestionProps) => {
  const { index, quizs, handleOnChange } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  setTimeout(()=>{
    setIsLoading(false)
  },1000)
  return (
    <Box sx={{ width: { xs: "100%", sm: "100%", md: "700px" } }}>
      <FormControl
        sx={{ m: { xs: 0, sm: 0, md: 3 }, width: "100%" }}
        variant="standard"
      >
        {
          isLoading ? <><Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'50%'}}> <CircularProgress color="inherit" /></Box></>:<RadioGroup>
          {quizs[index]?.options.map((element) => (
            <FormControlLabel
              sx={{
                background: `${props.time == 0 ? "#abab9a" : "#2A2A2A"}`,
                color: "#fff",
                mt: 4,
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
                alignItems: "center",
                borderRadius: "5px",
                border: "1px solid #d4d4d4",
              }}
              onChange={() => handleOnChange(element)}
              key={element.id}
              value={element.id}
              control={
                <Radio
                  disabled={props.time == 0 ? true : false}
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#D19F28",
                    },
                  }}
                />
              }
              label={element.option}
            />
          ))}
        </RadioGroup>
        }
      </FormControl>
    </Box>
  );
};

export default Question;
