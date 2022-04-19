import { Button } from "@mui/material";
type ButtonProps = {
 textValue: string;
};
const CommonButton = (props: ButtonProps) => {
 return (
  <Button
   sx={{
    bgcolor: "#D19F28",
    p: ".6em 2em",
    textTransform: "none",
    color: "#191C21",
    ":hover": {
     bgcolor: "#FBF4F4",
    },
   }}
  >
   {props.textValue}
  </Button>
 );
};

export default CommonButton;
