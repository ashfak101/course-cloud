import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";



const Faq = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
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

                                <Accordion
                                    sx={{
                                        backgroundColor: "#21252D",
                                        color: "white",
                                        marginBottom: "10px",
                                    }}
                                    expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
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
                                    expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
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
                            </Grid>
                            <Grid item xs={12} xl={6} md={6}>
                                <Typography sx={{ marginLeft: "10px" }}>General</Typography>
                                <Accordion
                                    sx={{
                                        backgroundColor: "#21252D",
                                        color: "white",
                                        marginBottom: "10px",
                                    }}
                                    expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
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
                                    expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
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
                                    expanded={expanded === 'panel5'} onChange={handleChange('panel5')}
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
                                    expanded={expanded === 'panel6'} onChange={handleChange('panel6')}
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
                            </Grid>
                            <Grid item xs={12} xl={6} md={6} sx={{ mt: { md: "-100px", xs: "0" } }}>
                                <Typography sx={{ marginLeft: "10px" }}>
                                    Pricing &#38; Payment
                                </Typography>
                                <Accordion
                                    sx={{
                                        backgroundColor: "#21252D",
                                        color: "white",
                                        marginBottom: "10px",
                                    }}
                                    expanded={expanded === 'panel7'} onChange={handleChange('panel7')}
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
                                    expanded={expanded === 'panel8'} onChange={handleChange('panel8')}
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
                                    expanded={expanded === 'panel9'} onChange={handleChange('panel9')}
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
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
};
export default Faq;
