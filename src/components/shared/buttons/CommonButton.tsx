import { Button } from "@mui/material";
type ButtonProps = {
 textValue: string;
 fontSize: string;
 onClick: ()=>void;
};
const CommonButton = (props: ButtonProps) => {
 return (
  <Button
   sx={{
    bgcolor: "#D19F28",
    p: ".8em 2.5em",
    textTransform: "none",
    color: "#191C21",
    fontWeight:'600',
    fontSize: props.fontSize,
    ":hover": {
     bgcolor: "#FBF4F4",
    },
   }}
   onClick={props.onClick}
  >
   {props.textValue}
  </Button>
 );
};

export default CommonButton;
