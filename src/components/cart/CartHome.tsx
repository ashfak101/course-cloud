import { Container, Box, Typography, Button, Step, StepLabel, Stepper } from "@mui/material"
import React, { useState } from "react";
import CartOrder from "./CartOrder"
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

const steps = ['Cart', 'Billing Details', 'Completed'];
const CartHome = () => {

  const [activeStep, setActiveStep] = useState<number>(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step: number) => {
    return step === 1
  }
  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  return (
    <>
      <Box sx={{ ...Styles.cartBackground }}>
        <Container maxWidth="xl" sx={{ py: 9 }}>

          <Typography sx={{ color: "#B2ADAD" }}>Home / MyCart</Typography>
          <Typography sx={{ color: "#FBF4F4", fontFamily: "Lato", fontWeight: "700", fontSize: "30px" }}>MyCart</Typography>

        </Container>
      </Box>
      <Container maxWidth='xl'>
        <Box sx={{ width: '100%', p: 5 }}>
          <Stepper activeStep={activeStep} sx={{
            "& .MuiStepIcon-active": { color: "red" },
            "& .MuiStepIcon-completed": { color: "green" },
            "&  .MuiStepLabel-label": { color: "#fff" },
            "&  .MuiStepIcon-root": { color: "#333", border: '2px solid #fff', borderRadius: '50% ' },


          }}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps} sx={{
                  '& .MuiStepLabel-root .Mui-completed': {
                    color: '#E2B627', // circle color (COMPLETED)

                  },
                  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                  {
                    color: '#E2B627', // Just text label (COMPLETED)
                  },
                  '& .MuiStepLabel-root .Mui-active': {
                    color: '#E2B627', // circle color (ACTIVE)
                  },
                  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                  {
                    color: '#fff', // Just text label (ACTIVE)
                  },
                  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                    fill: '#fff', // circle's number (ACTIVE)
                  },
                }}>
                  <StepLabel {...labelProps} sx={{ display: 'flex', flexDirection: 'column', color: '#333' }}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {/* <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button> */}
        </Box>
      </Container >
      {activeStep === steps.length - 3 && <CartOrder handleNext={handleNext}></CartOrder>}
      {activeStep === steps.length - 2 && <Checkout handleNext={handleNext} />}
      {activeStep === steps.length - 1 && <OrderSucces />}

      {/*  */}
    </>
  )
}

export default CartHome