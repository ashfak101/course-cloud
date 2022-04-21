import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Item = styled(Paper)(({ theme }) => ({
 backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
 ...theme.typography.body2,
 padding: theme.spacing(1),
 textAlign: "center",
 color: theme.palette.text.secondary,
}));

const Faq = () => {
 return (
  <>
   <Container maxWidth="xl" sx={{ my: 10 }}>
    <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
       <Typography
        sx={{
         fontStyle: "normal",
         fontWeight: "700",
         fontSize: "36px",
         lineHeight: "43px",
         textAlign: "center",
         color: "white",
         my: 4,
        }}
       >
        Frequently asked questions
       </Typography>
      </Grid>
     </Grid>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
       <Grid item xs={12} xl={6} md={6}>
        <Typography sx={{ marginLeft: "10px" }}>Free Trail</Typography>
        <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
         <Accordion
          sx={{
           backgroundColor: "#21252D",
           color: "white",
           marginBottom: "10px",
          }}
         >
          <AccordionSummary
           expandIcon={
            <ExpandMoreIcon
             sx={{
              backgroundColor: "#191C21",
              color: "white",
              borderRadius: "50%",
             }}
            />
           }
           aria-controls="panel1a-content"
           id="panel1a-header"
          >
           <Typography>How does the free trial work?</Typography>
          </AccordionSummary>
          <AccordionDetails>
           <Typography sx={{ textAlign: "left" }}>
            Sit at adipiscing turpis massa amet tempus lectus aliquam. Eget at
            tristique in <br /> viverra ultricies nec pulvinar. Vitae magna
            commodo odioyut.
           </Typography>
          </AccordionDetails>
         </Accordion>
         <Accordion
          sx={{
           backgroundColor: "#21252D",
           color: "white",
           marginBottom: "10px",
          }}
         >
          <AccordionSummary
           expandIcon={
            <ExpandMoreIcon
             sx={{
              backgroundColor: "#191C21",
              color: "white",
              borderRadius: "50%",
             }}
            />
           }
           aria-controls="panel2a-content"
           id="panel2a-header"
          >
           <Typography>
            Who is eligible to participate in free trial?
           </Typography>
          </AccordionSummary>
          <AccordionDetails>
           <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
           </Typography>
          </AccordionDetails>
         </Accordion>
        </Item>
       </Grid>
       <Grid item xs={12} xl={6} md={6}>
        <Typography sx={{ marginLeft: "10px" }}>General</Typography>
        <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
         <Accordion
          sx={{
           backgroundColor: "#21252D",
           color: "white",
           marginBottom: "10px",
          }}
         >
          <AccordionSummary
           expandIcon={
            <ExpandMoreIcon
             sx={{
              backgroundColor: "#191C21",
              color: "white",
              borderRadius: "50%",
             }}
            />
           }
           aria-controls="panel1a-content"
           id="panel1a-header"
          >
           <Typography>What is WorldClass?</Typography>
          </AccordionSummary>
          <AccordionDetails>
           <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
           </Typography>
          </AccordionDetails>
         </Accordion>
         <Accordion
          sx={{
           backgroundColor: "#21252D",
           color: "white",
           marginBottom: "10px",
          }}
         >
          <AccordionSummary
           expandIcon={
            <ExpandMoreIcon
             sx={{
              backgroundColor: "#191C21",
              color: "white",
              borderRadius: "50%",
             }}
            />
           }
           aria-controls="panel2a-content"
           id="panel2a-header"
          >
           <Typography>What is included in a WorldClass membership?</Typography>
          </AccordionSummary>
          <AccordionDetails>
           <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
           </Typography>
          </AccordionDetails>
         </Accordion>
         <Accordion
          sx={{
           backgroundColor: "#21252D",
           color: "white",
           marginBottom: "10px",
          }}
         >
          <AccordionSummary
           expandIcon={
            <ExpandMoreIcon
             sx={{
              backgroundColor: "#191C21",
              color: "white",
              borderRadius: "50%",
             }}
            />
           }
           aria-controls="panel3a-content"
           id="panel3a-header"
          >
           <Typography>Where can I watch?</Typography>
          </AccordionSummary>
         </Accordion>
         <Accordion
          sx={{
           backgroundColor: "#21252D",
           color: "white",
           marginBottom: "10px",
          }}
         >
          <AccordionSummary
           expandIcon={
            <ExpandMoreIcon
             sx={{
              backgroundColor: "#191C21",
              color: "white",
              borderRadius: "50%",
             }}
            />
           }
           aria-controls="panel3a-content"
           id="panel3a-header"
          >
           <Typography>Which classes are right for me?</Typography>
          </AccordionSummary>
         </Accordion>
        </Item>
       </Grid>
       <Grid item xs={12} xl={6} md={6} sx={{ mt: { md: "-100px", xs: "0" } }}>
        <Typography sx={{ marginLeft: "10px" }}>
         Pricing &#38; Payment
        </Typography>
        <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
         <Accordion
          sx={{
           backgroundColor: "#21252D",
           color: "white",
           marginBottom: "10px",
          }}
         >
          <AccordionSummary
           expandIcon={
            <ExpandMoreIcon
             sx={{
              backgroundColor: "#191C21",
              color: "white",
              borderRadius: "50%",
             }}
            />
           }
           aria-controls="panel1a-content"
           id="panel1a-header"
          >
           <Typography>How much does WorldClass cost?</Typography>
          </AccordionSummary>
          <AccordionDetails>
           <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
           </Typography>
          </AccordionDetails>
         </Accordion>
         <Accordion
          sx={{
           backgroundColor: "#21252D",
           color: "white",
           marginBottom: "10px",
          }}
         >
          <AccordionSummary
           expandIcon={
            <ExpandMoreIcon
             sx={{
              backgroundColor: "#191C21",
              color: "white",
              borderRadius: "50%",
             }}
            />
           }
           aria-controls="panel2a-content"
           id="panel2a-header"
          >
           <Typography>How does the 30-day guarantee work?</Typography>
          </AccordionSummary>
          <AccordionDetails>
           <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
           </Typography>
          </AccordionDetails>
         </Accordion>
         <Accordion
          sx={{
           backgroundColor: "#21252D",
           color: "white",
           marginBottom: "10px",
          }}
         >
          <AccordionSummary
           expandIcon={
            <ExpandMoreIcon
             sx={{
              backgroundColor: "#191C21",
              color: "white",
              borderRadius: "50%",
             }}
            />
           }
           aria-controls="panel3a-content"
           id="panel3a-header"
          >
           <Typography>How do I cancel?</Typography>
          </AccordionSummary>
         </Accordion>
        </Item>
       </Grid>
      </Grid>
     </Box>
    </Box>
   </Container>
  </>
 );
};
export default Faq;
