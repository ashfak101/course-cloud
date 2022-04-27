import { Container, Box, Typography, Button, Step, StepLabel, Stepper } from "@mui/material"
import React, { useState } from "react";
import CartOrder from "./CartOrder"
import Checkout from "./Checkout";
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
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps} sx={{ display: 'flex', flexDirection: 'column' }}>{label}</StepLabel>
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
      {activeStep === steps.length - 2 && <Checkout />}
      {/* <Checkout/> */}
    </>
  )
}

export default CartHome