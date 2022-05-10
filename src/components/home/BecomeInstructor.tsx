import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { useTheme } from "@emotion/react";



const BecomeInstructor = () => {
   const theme: any = useTheme();
   // console.log(theme)
   const Styles = {
      becomeBackground: {
         backgroundColor: theme.palette.mode === 'dark' ? '#191C23' : '#fff',
         height: "100%",
         width: "100%",
         py: 8,
      },
   };
   return (
      <>
         <Box sx={Styles.becomeBackground}>
            <Box sx={{ flexGrow: 1 }}>
               <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={6} xl={2} md={2} padding={.5}>

                     <Image
                        src="/assets/images/personone.png"
                        width="258"
                        height="330"
                        alt="img"
                     />

                  </Grid>
                  <Grid item xs={6} xl={2} md={2} padding={.5}>

                     <Image
                        src="/assets/images/persontwo.png"
                        width="258"
                        height="330"
                        alt="img"
                     />

                  </Grid>
                  <Grid item xs={12} xl={2} md={2} padding={.5}>

                     <Image
                        src="/assets/images/personthree.png"
                        width="258"
                        height="330"
                        alt="img"
                     />

                  </Grid>
                  <Grid item xs={12} xl={6} md={6} padding={.5}>

                     <Typography
                        sx={{
                           fontFamily: "Lato",
                           fontStyle: "normal",
                           fontWeight: "700",
                           fontSize: "36px",
                           lineHeight: "43px",
                           textAlign: "left",
                           color: theme.palette.mode === 'dark' ? 'white' : '#2d2d2d',
                        }}
                     >
                        Become an Instructor - Earn by Teaching Online at Course Cloud
                     </Typography>


                     <Typography
                        sx={{
                           fontFamily: "Lato",
                           fontStyle: "normal",
                           fontWeight: "400",
                           fontSize: "18px",
                           lineHeight: "21px",
                           textAlign: "left",
                           color: theme.palette.mode === 'dark' ? 'white' : '#2d2d2d',
                           my: 3
                        }}
                     >
                        Watch thousands of lessons from the best as they share their <br />{" "}
                        stories, skills, shortcuts, failures, and successes.
                     </Typography>

                     <Button
                        sx={{
                           backgroundColor: "#5193F6 !important",
                           color: "white",
                           height: "60px",
                           width: "269px",
                           fontFamily: "Lato",
                           fontStyle: "normal",
                           fontWeight: "500",
                           fontSize: "18px",
                           lineHeight: "71.5%",
                        }}
                     >
                        BECOME A INSTRUCTOR
                     </Button>
                  </Grid>
               </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
               <Grid container>
                  <Grid item xs={6} xl={2} md={2} padding={.5}>

                     <Image
                        src="/assets/images/personfour.png"
                        width="258"
                        height="330"
                        alt="img"
                     />
                  </Grid>
                  <Grid item xs={6} xl={2} md={2} padding={.5}>

                     <Image
                        src="/assets/images/personfive.png"
                        width="258"
                        height="330"
                        alt="img"
                     />

                  </Grid>
                  <Grid item xs={6} xl={2} md={2} padding={.5}>
                     <Image
                        src="/assets/images/personsix.png"
                        width="258"
                        height="330"
                        alt="img"
                     />

                  </Grid>
                  <Grid item xs={6} xl={2} md={2} padding={.5}>

                     <Image
                        src="/assets/images/personseven.png"
                        width="258"
                        height="330"
                        alt="img"
                     />

                  </Grid>
                  <Grid item xs={6} xl={2} md={2} padding={.5}>

                     <Image
                        src="/assets/images/personeight.png"
                        width="258"
                        height="330"
                        alt="img"
                     />

                  </Grid>
                  <Grid item xs={6} xl={2} md={2} padding={.5}>
                     <Image
                        src="/assets/images/personnine.png"
                        width="258"
                        height="330"
                        alt="img"
                     />
                  </Grid>
               </Grid>
            </Box>
         </Box>
      </>
   );
};
export default BecomeInstructor;
