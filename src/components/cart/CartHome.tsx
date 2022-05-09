import {
  Container,
  Box,
  Typography,
  Button,
  Step,
  StepLabel,
  Stepper,
  StepButton,
} from "@mui/material";
import React, { useState } from "react";
import CartOrder from "./CartOrder";
import Checkout from "./Checkout";
import OrderSucces from "./OrderSucces";
const Styles = {
  cartBackground: {
    backgroundImage: `url('/assets/images/cartheader.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
};


const steps = ["Cart", "Billing Details", "Completed"];
const CartHome = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  // const [show,setShow]=useState<boolean>(false);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});
  
  const totalSteps =()=>{
      return steps.length;
  }

  const completedSteps=()=>{
    return Object.keys(completed).length
  }
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  
  const handleNext = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep + 1) 
    const newActiveStep = isLastStep() && allStepsCompleted() ? steps.findIndex((step , i)=>!(i in completed)):activeStep +1;
    setActiveStep(newActiveStep)
  };
  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  console.log(activeStep);
  
  return (
    <>
      <Box sx={{ ...Styles.cartBackground }}>
        <Container maxWidth="xl" sx={{ py: 9 }}>
          <Typography sx={{ color: "#B2ADAD" }}>Home / MyCart</Typography>
          <Typography
            sx={{
              color: "#FBF4F4",
              fontFamily: "Lato",
              fontWeight: "700",
              fontSize: "30px",
            }}
          >
            MyCart
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="xl">
        <Box sx={{ width: "100%", p: 5 }}>
          <Stepper
            nonLinear 
            activeStep={activeStep}
            sx={{
             
              "&  .MuiStepLabel-label": { color: "#fff" },
              "&  .MuiStepIcon-root": {
                color: "#FFFFFF",
                border: "2px solid #fff",
                borderRadius: "50% ",
              },"& .MuiStepLabel-root .Mui-active": {
                color: "#E2B627", // circle color (ACTIVE)
              },
              "& .MuiStepLabel-root .Mui-completed": {
                color: "#E2B627", // circle color (COMPLETED)
              },
               
              "& .MuiStepLabel-root .MuiSvgIcon-root .MuiStepIcon-text": {
                fill: "#333", // circle color (COMPLETED)
              },
            }}
          >
            {steps.map((label,index) => (
             
                
                <Step
                  key={label}
                 
                  completed={completed[index]}
                 sx={{ cursor:'pointer'}}
                >
                 
                    <StepButton color="inherit" onClick={handleStep(index)}>
                       {label}
                     </StepButton>
                 
                </Step>
             
             ))}
          </Stepper>
          
        </Box>
      </Container>
      {activeStep === 0 && (
        <CartOrder handleComplete={handleComplete} activeStep ={activeStep } completed={completed} steps={steps}></CartOrder>
      )}
      {activeStep === 1 && <Checkout handleComplete={handleComplete} activeStep ={activeStep } completed={completed} steps={steps}/>}
      {activeStep === 2 && <OrderSucces/>}
        
    
      {/*  */}
    </>
  );
};

export default CartHome;
