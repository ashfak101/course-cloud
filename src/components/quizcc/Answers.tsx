import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Option } from "../../types/questionTypes";

type AnsProps = {
  options: Option[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  optionDisable:boolean
};

const Answers = ({ options, handleChange,optionDisable }: AnsProps) => {
  // console.log(options);

  // options.forEach(option=>{
   
  //   if(option.checked===true){
  //     console.log(option.checked)
  //     setQuestionCheck(false)
  //   }
  // })
  return (
    <Box
      sx={{
        p: 3,
        my: 4,
        borderRadius: "8px",
        bgcolor: "black",
      }}
    >
      {options.map((option, index) => (
        <FormControlLabel
          sx={{
            display: "block",
            border: "1px solid gray",
            m: 2,
            borderRadius: "5px",
            bgcolor: "#21252D",
          }}
          key={index}
          control={
            <Checkbox
              sx={{ color: "white" }}
              value={index}
              checked={option.checked}
              disabled={optionDisable}
              onChange={(e) => handleChange(e, index)}
            />
          }
          label={option.option}
        />
      ))}
    </Box>
  );
};

export default Answers;
