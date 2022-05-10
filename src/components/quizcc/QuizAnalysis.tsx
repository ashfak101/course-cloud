import { Box, Typography } from "@mui/material";
import React from "react";
import { QuestionsCC } from "types/questionTypes";

type Props = {
  result: QuestionsCC[];
  uiCorrectFalseIndex: boolean[];
};

const QuizAnalysis = ({ result, uiCorrectFalseIndex }: Props) => {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 5 },
        backgroundColor: "#494949",
        borderRadius: "5px",
      }}
    >
      {result.map((ques, index) => (
        <Box key={index} sx={{ my: 6 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "1.3rem", md: "1.6rem" } }}
          >
            Quiz {index + 1}. {ques.question}
          </Typography>
          {ques.options.map((option, index) => (
            <Box key={index}>
              {option.correct && (
                <Typography
                  sx={{
                    my: 2,
                    color: "#adadac",
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                  }}
                >
                  Answer: {option.option}
                </Typography>
              )}
            </Box>
          ))}
          {uiCorrectFalseIndex[index] ? (
            <Typography>
              Your answer is{" "}
              <Typography component="span" sx={{ color: "#0ced0c" }}>
                Correct
              </Typography>
            </Typography>
          ) : (
            <Typography>
              Your answer is{" "}
              <Typography component="span" sx={{ color: "#fa2525" }}>
                Wrong
              </Typography>
            </Typography>
          )}

          <hr />
        </Box>
      ))}
    </Box>
  );
};

export default QuizAnalysis;

/** 
 

 {option.checked && option.correct && (
                <Box>
                  <Typography
                    sx={{
                      my: 2,
                      color: "#adadac",
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                    }}
                    variant="h6"
                  >
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
                  <Typography
                    sx={{
                      my: 2,
                      color: "#adadac",
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                    }}
                    variant="h6"
                  >
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

  
  
  **/
