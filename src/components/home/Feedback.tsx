import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const Feedback = () => {
 const settings = {
  customPaging: function (i: any) {
   return <a className="dot"> </a>;
  },
  dotsClass: "slick-dots slick-thumb",
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
 };

 return (
  <Box
   sx={{
    minHeight: "60vh",
    py: 8,
    backgroundImage: `url('/assets/images/review-bg.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
   }}
  >
   <Container>
    <Typography sx={{ textAlign: "center" }} variant="h3">
     What Students Are Saying
    </Typography>
    <div>
     <Slider {...settings}>
      <div>
       <Box
        sx={{
         display: { xs: "block", md: "flex" },
         alignItems: "center",
         justifyContent: "center",
         mx: "0 auto",
         textAlign: "center",
        }}
       >
        <Typography
         sx={{
          maxWidth: "512px",
          py: 10,
          px: 5,
          bgcolor: "#191C21",
          borderRadius: "10px",
          m: { xs: "0 auto", md: "0 -30px 0 0" },
          position: "relative",
          zIndex: "10",
         }}
        >
         “I“ve learned a positively immeasurable amount of things from Georgina
         Sims and Holly Tyler. It gave me this sense of possibility. Like I can
         actually do it.”
        </Typography>
        <Image
         src="/assets/images/review-person-img.png"
         height="500px"
         width="310px"
         alt="logo"
         objectFit="contain"
        />
       </Box>
      </div>
      <div>1000</div>
      <div>
       <h3>3</h3>
      </div>
      <div>
       <h3>4</h3>
      </div>
      <div>
       <h3>5</h3>
      </div>
      <div>
       <h3>6</h3>
      </div>
     </Slider>
    </div>
   </Container>
  </Box>
 );
};

export default Feedback;
