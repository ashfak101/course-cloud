import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import CommonButton from "components/shared/buttons/CommonButton";
import { useTheme } from "@emotion/react";





const Banner = () => {
    const theme: any = useTheme();
    console.log(theme.palette.mode)

    return (
        <Box sx={{
            backgroundColor: theme.palette.mode === 'dark' ? '#0f0f0f' : '#fff',
        }}>
            <Container maxWidth="xl" sx={{
                mt: 10,
                backgroundColor: theme.palette.mode === 'dark' ? '#0f0f0f' : 'white',
                mb: 18
            }}>
                <Grid container spacing={5} sx={{ display: "flex", alignItems: "center" }}>
                    <Grid item xs={12} xl={6} md={6}>

                        <Typography
                            sx={{
                                textAlign: "left",
                                fontSize: "3.5rem",
                                fontWeight: "200",
                                color: theme.palette.mode === 'dark' ? 'white' : '#2d2d2d',
                                fontFamily: "Oswald, sans-serif",
                            }}
                        >
                            A Learning Curve
                        </Typography>


                        <Typography
                            sx={{
                                textAlign: "left",
                                fontSize: {
                                    xs: '30px',
                                    md: "65px"
                                },
                                fontWeight: "500",
                                color: theme.palette.mode === 'dark' ? 'white' : '#2d2d2d',
                                fontFamily: "Oswald, sans-serif",
                            }}
                        >
                            IS ESSENTIAL TO GROWTH
                        </Typography>


                        <Typography
                            sx={{
                                textAlign: "left",
                                color: theme.palette.mode === 'dark' ? '#C4C4C4' : '#2d2d2d',

                                fontSize: "1.4rem",
                                fontWeight: "200",
                                pt: 3,
                                pb: 4,
                            }}
                        >
                            All of CourseCloud.Free for 3 days.
                        </Typography>

                        <Box sx={{ flexGrow: 1, marginBottom: "108px" }}>
                            <Grid
                                container
                                spacing={2}
                                sx={{ display: "flex", alignItems: "center" }}
                            >
                                <Grid item xs={12} xl={4} md={12}>
                                    <CommonButton
                                        fontSize="1rem"
                                        textValue="GET STARTED"
                                        onClick={() => { }}
                                    />

                                </Grid>
                                <Grid item xs={12} xl={6} md={12}>

                                    <Typography sx={{ textAlign: "left", color: "white", pb: 1 }}>
                                        $15/month (billed annually)
                                    </Typography>
                                    <Typography
                                        sx={{
                                            textAlign: "left",
                                            color: theme.palette.mode === 'dark' ? 'white' : '#2d2d2d',
                                            textDecoration: "underline",
                                        }}
                                    >
                                        Offer terms apply
                                    </Typography>

                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} xl={12}>

                                    <Image
                                        src="/assets/images/awardlogos.png"
                                        width="540"
                                        height="67.62"
                                        alt="img"
                                    />
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
        </Box>
    );
};
export default Banner;
