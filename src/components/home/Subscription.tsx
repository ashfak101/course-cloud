import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import CommonButton from "components/shared/buttons/CommonButton";
const Styles = {
    subscriptionBackground: {
        backgroundImage: `url('/assets/images/subscriptionbackground.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    },
};


const Subscription = () => {
    return (
        <>
            <Box sx={{ ...Styles.subscriptionBackground }}>
                <Container maxWidth="xl">
                    <Box sx={{ flexGrow: 1, paddingTop: "50px" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} xl={12} md={12}>
                                <Typography
                                    sx={{
                                        fontFamily: "Lato",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "36px",
                                        lineHeight: "43px",
                                        textAlign: "center",
                                        color: "white",
                                        marginBottom: "20px",
                                    }}
                                >
                                    Get Your Subscription & Avail Courses
                                </Typography>

                                <Typography
                                    sx={{
                                        fontFamily: "Lato",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "18px",
                                        lineHeight: "29px",
                                        textAlign: "center",
                                        color: "white",
                                        marginBottom: "40px",
                                    }}
                                >
                                    Try condensed lessons, topic playlists, or binge right through a
                                    class. <br /> MasterClass fits in any part of your day.
                                </Typography>

                                <Box sx={{ textAlign: 'center', mb: 10 }}>
                                    <CommonButton
                                        fontSize="1rem"
                                        textValue="GET STARTED"
                                        onClick={() => { }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
};
export default Subscription;
