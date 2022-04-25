import { Button } from "@mui/material";
type ButtonProps = {
 textValue: string;
 borderColor: string;
 hoverBorderColor: string;
 bgcolor: string;
};
const SecondaryBtn = (props: ButtonProps) => {
 return (
  <Button
   sx={{
    color: `#fff`,
    border: `1px solid #fff`,
    p: ".5em 1.2em",
    ":hover": {
     bgcolor: `${props.bgcolor}`,
     border: `1px solid  ${props.hoverBorderColor}`,
    },
   }}
   onClick={() => alert("onClick secondary btn component")}
  >
   {props.textValue}
  </Button>
 );
};

export default SecondaryBtn;
