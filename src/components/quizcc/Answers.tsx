import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Option } from "types/questionTypes";

type AnsProps = {
  options: Option[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
};

const Answers = ({ options, handleChange }: AnsProps) => {
  // console.log(options);
  return (
    <Box>
      {options.map((option, index) => (
        <FormControlLabel
          sx={{ display: "block" }}
          key={index}
          control={
            <Checkbox
              sx={{ color: "white" }}
              value={index}
              checked={option.checked}
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
