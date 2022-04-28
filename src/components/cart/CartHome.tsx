import {
  Container,
  Box,
  Typography,
  Button,
  Step,
  StepLabel,
  Stepper,
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
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
  };
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
            {steps.map((label) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step
                  key={label}
                  {...stepProps}
                  
                >
                  <StepLabel
                    {...labelProps}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      color: "#333","& .MuiStepLabel-root .MuiSvgIcon-root .MuiStepIcon-text": {
                        color: "#E2B627", // circle color (COMPLETED)
                      },
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
          
        </Box>
      </Container>
      {activeStep === steps.length - 3 && (
        <CartOrder handleNext={handleNext}></CartOrder>
      )}
      {activeStep === steps.length - 2 && <Checkout handleNext={handleNext} />}
      {activeStep === steps.length - 1 && <OrderSucces/>}
    
      {/*  */}
    </>
  );
};

export default CartHome;
