import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Image from "next/image";
import CommonButton from "components/shared/buttons/CommonButton";
import { useEffect, useState } from "react";
import moment from "moment";
import CourseCard from "components/shared/coursecard/CourseCard";
import { CourseData } from "../../../types";
import { useTheme } from "@emotion/react";





type Props = {
   courses: CourseData;
};

const DealoftheDay = ({ courses }: Props) => {
   const [days, setDays] = useState(0);
   const [hours, setHours] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);
   const [showSemicolon, setShowSemicolon] = useState(false);
   const theme: any = useTheme();

   const Styles = {
      dealBackground: {
         backgroundColor: theme.palette.mode === 'dark' ? '#191C23' : '#fff',
         height: "100%",
         width: "100%",
         py: 8,
      },
   };
   const [displayCourses, setDisplayCourses] = React.useState(
      courses.mainCourses
   );

   useEffect(() => {
      setInterval(() => {
         const now: any = moment();
         const then: any = moment("2020-10-15 12:12:12", "YYYY-MM-DD hh:mm:ss");
         const countdown: any = moment(then - now);
         setDays(countdown.format("D"));
         setHours(countdown.format("HH"));
         setMinutes(countdown.format("mm"));
         setSeconds(countdown.format("ss"));
      }, 1000);
   }, []);
   return (
      <>
         <Box sx={{ ...Styles.dealBackground }}>
            <Container maxWidth="xl">
               <Box>
                  <Typography
                     sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "36px",
                        lineHeight: "43px",
                        textAlign: "center",
                        color: theme.palette.mode === 'dark' ? 'white' : '#2d2d2d',
                        marginBottom: "20px",
                     }}
                  >
                     Deal of The Day
                  </Typography>
                  <Typography
                     sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "29px",
                        textAlign: "center",
                        color: theme.palette.mode === 'dark' ? 'white' : '#2d2d2d',
                        marginBottom: "45px",
                     }}
                  >
                     Vestibulum purus mus gravida ultrices consectetur <br /> morbi tomorbi
                     faucibus ut eget nec tempor.
                  </Typography>
                  <Box>
                     <Box className="counter" sx={{ color: theme.palette.mode === 'dark' ? 'white' : '#2d2d2d', }}>
                        <Box className="timer-container">
                           <Box
                              sx={{
                                 display: "flex",
                                 flexDirection: "column",
                                 alignItems: "center",

                              }}
                           >
                              <Box className="days">{days}</Box>
                              <Box>
                                 <Typography>Days</Typography>
                              </Box>
                           </Box>
                           {showSemicolon ? <Box className="semicolon">:</Box> : null}
                           <Box
                              sx={{
                                 display: "flex",
                                 flexDirection: "column",
                                 alignItems: "center",
                              }}
                           >
                              <Box className="hours">{hours}</Box>
                              <Box>
                                 <Typography>Hours</Typography>
                              </Box>
                           </Box>
                           {showSemicolon ? <Box className="semicolon">:</Box> : null}
                           <Box
                              sx={{
                                 display: "flex",
                                 flexDirection: "column",
                                 alignItems: "center",
                              }}
                           >
                              <Box className="minutes">{minutes}</Box>
                              <Box>
                                 <Typography sx={{ marginLeft: "-20px !important" }}>
                                    Minutes
                                 </Typography>
                              </Box>
                           </Box>
                           {showSemicolon ? <Box className="semicolon">:</Box> : null}
                           <Box
                              sx={{
                                 display: "flex",
                                 flexDirection: "column",
                                 alignItems: "center",
                              }}
                           >
                              <Box className="seconds">{seconds}</Box>
                              <Box>
                                 <Typography>Seconds</Typography>
                              </Box>
                           </Box>
                        </Box>
                     </Box>
                  </Box>
               </Box>
               <Grid container spacing={2}>
                  {displayCourses?.slice(0, 3).map((course) => (
                     <Grid
                        item
                        xs={12}
                        md={4}
                        lg={4}
                        key={course?.id}
                        sx={{
                           display: "flex",
                           justifyContent: "center",
                           my: 4,
                        }}
                     >
                        <CourseCard course={course} isDiscounted={true} />
                     </Grid>
                  ))}
               </Grid>
            </Container>
         </Box>
      </>
   );
};
export default DealoftheDay;
