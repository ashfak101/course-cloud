import { Box, Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { QuestionsCC } from "types/questionTypes";

type Props = {
  quizAnswers: QuestionsCC[];
  userScore: number;
};

const ResultAccordionHeader = ({ userScore, quizAnswers }: Props) => {
  const Styles = {
    headerContainer: {
      background: "#282D37",
      px: 2,
      pt: { xs: 2, md: 0 },
      pb: { xs: 10, md: 0 },
      color: "#fff",
      height: "50px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px",
      width: "100%",
    },
    quizPass: {
      mt: { xs: 1, md: 0 },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "green",
    },
    quizFail: {
      mt: { xs: 1, md: 0 },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "red",
    },
  };

  return (
    <Box sx={Styles.headerContainer}>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ fontSize: { xs: "1rem", md: "1.4rem" } }}>
          Your Score{" "}
          <Typography
            component="span"
            sx={{ fontSize: { xs: "1rem", md: "1.4rem" }, color: "#FBDE44" }}
          >
            {userScore}/{quizAnswers.length}
          </Typography>
        </Typography>
        <Typography sx={{ ml: 3, fontSize: { xs: "1rem", md: "1.4rem" } }}>
          Click to see result
        </Typography>
      </Box>

      {userScore > 5 ? (
        <Typography sx={Styles.quizPass}>
          Quiz Pass <ExpandMoreIcon />
        </Typography>
      ) : (
        <Typography sx={Styles.quizFail}>
          Quiz Fail <ExpandMoreIcon />
        </Typography>
      )}
    </Box>
  );
};

export default ResultAccordionHeader;
