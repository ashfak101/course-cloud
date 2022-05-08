import { Box, Typography } from "@mui/material";
import React from "react";
import { QuestionsCC } from "types/questionTypes";

type Props = {
  result: QuestionsCC[];
};

const QuizAnalysis = ({ result }: Props) => {
  return (
    <Box sx={{ p: 5, backgroundColor: "#494949", borderRadius: "5px" }}>
      {result.map((ques, index) => (
        <Box key={index} sx={{ my: 8 }}>
          <Typography variant="h5">
            Quiz {index + 1}. {ques.question}
          </Typography>
          {ques.options.map((option, index) => (
            <Box key={index}>
              {option.checked && option.correct && (
                <Box>
                  <Typography sx={{ my: 2, color: "#adadac" }} variant="h6">
                    Answer: {option.option}
                  </Typography>
                  <Typography>
                    Your answer is{" "}
                    <Typography component="span" sx={{ color: "#0ced0c" }}>
                      Correct
                    </Typography>
                  </Typography>
                </Box>
              )}
              {!option.checked && option.correct && (
                <Box>
                  <Typography sx={{ my: 2, color: "#adadac" }} variant="h6">
                    Answer: {option.option}
                  </Typography>
                  <Typography>
                    Your answer is{" "}
                    <Typography component="span" sx={{ color: "#fa2525" }}>
                      Wrong
                    </Typography>
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
          <hr />
        </Box>
      ))}
    </Box>
  );
};

export default QuizAnalysis;
