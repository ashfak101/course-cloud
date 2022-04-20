import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
 backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
 ...theme.typography.body2,
 padding: theme.spacing(1),
 textAlign: "center",
 color: theme.palette.text.secondary,
}));

const Banner = () => {
 return (
  <>
   <Container maxWidth="xl" sx={{ mt: 5 }}>
    <Grid container spacing={5} sx={{ display: "flex", alignItems: "center" }}>
     <Grid item xs={12} xl={6} md={6}>
      <Item sx={{ backgroundColor: "transparent", py: 0, boxShadow:'0' }}>
       <Typography
        sx={{
         textAlign: "left",
         fontSize: "3.5rem",
         fontWeight: "200",
         color: "white",
         fontFamily: "Oswald, sans-serif",
         marginBottom:'25px'
        }}
       >
        A Learning Curve
       </Typography>
      </Item>
      <Item sx={{ backgroundColor: "transparent", py: 0, boxShadow:'0' }}>
       <Typography
        sx={{
         textAlign: "left",
         fontSize: "65px",
         fontWeight: "500",
         color: "white",
         fontFamily: "Oswald, sans-serif",
         marginBottom:'36px'
        }}
       >
        IS ESSENTIAL TO GROWTH
       </Typography>
      </Item>
      <Item sx={{ backgroundColor: "transparent", boxShadow:'0' }}>
       <Typography sx={{ textAlign: "left", color: "white", marginBottom:'36px' }}>
        All of CourseCloud.Free for 3 days.
       </Typography>
      </Item>
      <Box sx={{ flexGrow: 1, marginBottom:'108px' }}>
       <Grid container spacing={2}>
        <Grid item xs={12} xl={4} md={12}>
         <Item sx={{ backgroundColor: "#D19F28", textAlign: "center" }}>
          <Button sx={{color:'black', height:'60px', fontFamily:'Lato', fontStyle:'normal', fontWeight:'500', fontSize:'18px', lineHeight:'71.5%'}}>Get Started</Button>
         </Item>
        </Grid>
        <Grid item xs={12} xl={6} md={12}>
         <Item sx={{ backgroundColor: "transparent", boxShadow:'0' }}>
          <Typography sx={{ textAlign: "left", color: "white" }}>
           $15/month (billed annually)
          </Typography>
         </Item>
         <Item sx={{ backgroundColor: "transparent", boxShadow:'0' }}>
          <Typography sx={{ textAlign: "left", color: "white" }}>
           Offer terms apply
          </Typography>
         </Item>
        </Grid>
       </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
         <Item sx={{ backgroundColor: "transparent", textAlign: "left", boxShadow:'0' }}>
          <Image
           src="/assets/images/awardlogos.png"
           width="540"
           height="67.62"
           alt="img"
          />
         </Item>
        </Grid>
       </Grid>
      </Box>
     </Grid>
     <Grid item xs={12} xl={6} md={6}>
      <Image
       src="/assets/images/bannerimage.png"
       width="696"
       height="599"
       alt="img"
      />
     </Grid>
    </Grid>
   </Container>
  </>
 );
};
export default Banner;
