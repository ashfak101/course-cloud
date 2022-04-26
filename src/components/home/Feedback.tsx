import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import { CourseData } from "../../../types";

type Props = {
 courses: CourseData;
};

const Feedback = ({ courses }: Props) => {
 const sliderRef = useRef<any>(null!);

 const settings = {
  customPaging: function (i: any) {
   return <a className="dot"></a>;
  },
  dotsClass: "slick-dots slick-thumb",
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
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
    <Typography sx={{ textAlign: "center", fontSize: "36px" }} variant="h3">
     What Students Are Saying
    </Typography>

    <div style={{ position: "relative" }}>
     <Button
      onClick={() => sliderRef?.current?.slickPrev()}
      sx={{
       position: "absolute",
       top: "45%",
       left: { xs: "-15px", md: "-15px", lg: "35px" },
       zIndex: "10",
       color: "white",
       width: "60px",
       height: "60px",
       borderRadius: "50%",
      }}
     >
      <ArrowBackIosTwoToneIcon
       sx={{
        borderRadius: "50%",
        p: "8px",
        backgroundColor: "#191C21",
        fontSize: "3rem",
       }}
      />
     </Button>
     <Button
      sx={{
       position: "absolute",
       top: "45%",
       right: { xs: "-15px", md: "-15px", lg: "35px" },
       zIndex: "10",
       color: "white",
       width: "60px",
       height: "60px",
       borderRadius: "50%",
      }}
      onClick={() => sliderRef?.current?.slickNext()}
     >
      <ArrowForwardIosTwoToneIcon
       sx={{
        borderRadius: "50%",
        p: "8px",
        backgroundColor: "#191C21",
        fontSize: "3rem",
       }}
      />
     </Button>
     <Slider {...settings} ref={sliderRef}>
      {courses.studentReview.map((person) => (
       <div key={person.id}>
        <Box
         sx={{
          display: { xs: "block", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          m: "2em auto",
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
          {person.review}
         </Typography>
         <Image
          src={person.avatar}
          height="400px"
          width="310px"
          alt="logo"
          objectFit="cover"
          style={{ borderRadius: "10px" }}
         />
        </Box>
       </div>
      ))}
     </Slider>
    </div>
   </Container>
  </Box>
 );
};

export default Feedback;

/* 


 <Button
      onClick={() => console.log("clicked")}
      sx={{
       position: "absolute",
       top: "45%",
       left: { xs: "-15px", md: "-15px", lg: "35px" },
       zIndex: "10",
       color: "white",
       width: "60px",
       height: "60px",
       borderRadius: "50%",
      }}
     >
      <ArrowBackIosTwoToneIcon
       sx={{
        borderRadius: "50%",
        p: "8px",
        backgroundColor: "#191C21",
        fontSize: "3rem",
       }}
      />
     </Button>
     <Button
      sx={{
       position: "absolute",
       top: "45%",
       right: { xs: "-15px", md: "-15px", lg: "35px" },
       zIndex: "10",
       color: "white",
       width: "60px",
       height: "60px",
       borderRadius: "50%",
      }}
      onClick={() => sliderRef?.current?.slickNext()}
     >
      <ArrowForwardIosTwoToneIcon
       sx={{
        borderRadius: "50%",
        p: "8px",
        backgroundColor: "#191C21",
        fontSize: "3rem",
       }}
      />
     </Button>


*/
