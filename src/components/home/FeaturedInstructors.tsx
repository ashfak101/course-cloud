import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CommonButton from "components/shared/buttons/CommonButton";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import { useRef } from "react";

const FeaturedInstructors = () => {
 const sliderRef = useRef<any>(null!);

 const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  initialSlide: 0,
  responsive: [
   {
    breakpoint: 1024,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 1,
     infinite: false,
     dots: false,
    },
   },
   {
    breakpoint: 600,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     initialSlide: 0,
     infinite: false,
     dots: false,
    },
   },
   {
    breakpoint: 480,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: false,
     dots: false,
    },
   },
  ],
 };

 return (
  <Container maxWidth="xl" sx={{ py: 8 }}>
   <Typography variant="h3" sx={{ fontSize: "36px" }}>
    Featured Instructor
   </Typography>
   <div style={{ border: "1px solid red", position: "relative", zIndex: "10" }}>
    <Button onClick={() => sliderRef?.current?.slickPrev()}>
     <ArrowBackIosTwoToneIcon />
    </Button>
    <Button onClick={() => sliderRef?.current?.slickNext()}>
     <ArrowForwardIosTwoToneIcon />
    </Button>
    <Slider {...settings} ref={sliderRef}>
     <div>
      <Box
       sx={{
        textAlign: "center",
        maxWidth: 366,
        margin: "0 auto",
       }}
      >
       <Box sx={{ margin: "0 8px" }}>
        <Box
         sx={{
          backgroundImage: `url(/assets/images/personone.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "294px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
         }}
        >
         <Box sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontSize: "30px" }}>
           Connor Francis
          </Typography>
          <Typography sx={{ fontWeight: "light", mb: 1 }}>
           Teaches Writing for Television
          </Typography>
          <CommonButton fontSize="0.9rem" textValue="VIEW DETAILS" />
         </Box>
        </Box>
        <Box sx={{ bgcolor: "#21252D", py: 2 }}>
         <Grid container>
          <Grid item xs={6} sx={{ borderRight: "1px dashed #494949" }}>
           <Typography variant="h6">85+ Classes</Typography>
           <Typography sx={{ fontWeight: "300" }}>From the masters</Typography>
          </Grid>
          <Grid item xs={6}>
           <Typography variant="h6">20 Lessons</Typography>
           <Typography sx={{ fontWeight: "300" }}>Average per class</Typography>
          </Grid>
         </Grid>
        </Box>
       </Box>
      </Box>
     </div>
     <div>
      <Box
       sx={{
        textAlign: "center",
        maxWidth: 366,
        margin: "0 auto",
       }}
      >
       <Box sx={{ margin: "0 8px" }}>
        <Box
         sx={{
          backgroundImage: `url(/assets/images/personone.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "294px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
         }}
        >
         <Box sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontSize: "30px" }}>
           Connor Francis
          </Typography>
          <Typography sx={{ fontWeight: "light", mb: 1 }}>
           Teaches Writing for Television
          </Typography>
          <CommonButton fontSize="0.9rem" textValue="VIEW DETAILS" />
         </Box>
        </Box>
        <Box sx={{ bgcolor: "#21252D", py: 2 }}>
         <Grid container>
          <Grid item xs={6} sx={{ borderRight: "1px dashed #494949" }}>
           <Typography variant="h6">85+ Classes</Typography>
           <Typography sx={{ fontWeight: "300" }}>From the masters</Typography>
          </Grid>
          <Grid item xs={6}>
           <Typography variant="h6">20 Lessons</Typography>
           <Typography sx={{ fontWeight: "300" }}>Average per class</Typography>
          </Grid>
         </Grid>
        </Box>
       </Box>
      </Box>
     </div>
     <div>
      <Box
       sx={{
        textAlign: "center",
        maxWidth: 366,
        margin: "0 auto",
       }}
      >
       <Box sx={{ margin: "0 8px" }}>
        <Box
         sx={{
          backgroundImage: `url(/assets/images/personone.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "294px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
         }}
        >
         <Box sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontSize: "30px" }}>
           Connor Francis
          </Typography>
          <Typography sx={{ fontWeight: "light", mb: 1 }}>
           Teaches Writing for Television
          </Typography>
          <CommonButton fontSize="0.9rem" textValue="VIEW DETAILS" />
         </Box>
        </Box>
        <Box sx={{ bgcolor: "#21252D", py: 2 }}>
         <Grid container>
          <Grid item xs={6} sx={{ borderRight: "1px dashed #494949" }}>
           <Typography variant="h6">85+ Classes</Typography>
           <Typography sx={{ fontWeight: "300" }}>From the masters</Typography>
          </Grid>
          <Grid item xs={6}>
           <Typography variant="h6">20 Lessons</Typography>
           <Typography sx={{ fontWeight: "300" }}>Average per class</Typography>
          </Grid>
         </Grid>
        </Box>
       </Box>
      </Box>
     </div>
     <div>
      <Box
       sx={{
        textAlign: "center",
        maxWidth: 366,
        margin: "0 auto",
       }}
      >
       <Box sx={{ margin: "0 8px" }}>
        <Box
         sx={{
          backgroundImage: `url(/assets/images/personone.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "294px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
         }}
        >
         <Box sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontSize: "30px" }}>
           Connor Francis
          </Typography>
          <Typography sx={{ fontWeight: "light", mb: 1 }}>
           Teaches Writing for Television
          </Typography>
          <CommonButton fontSize="0.9rem" textValue="VIEW DETAILS" />
         </Box>
        </Box>
        <Box sx={{ bgcolor: "#21252D", py: 2 }}>
         <Grid container>
          <Grid item xs={6} sx={{ borderRight: "1px dashed #494949" }}>
           <Typography variant="h6">85+ Classes</Typography>
           <Typography sx={{ fontWeight: "300" }}>From the masters</Typography>
          </Grid>
          <Grid item xs={6}>
           <Typography variant="h6">20 Lessons</Typography>
           <Typography sx={{ fontWeight: "300" }}>Average per class</Typography>
          </Grid>
         </Grid>
        </Box>
       </Box>
      </Box>
     </div>
    </Slider>
   </div>
  </Container>
 );
};

export default FeaturedInstructors;
