import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import { BlogsData } from "../../../types-blog";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

type Props = {
    blogs: BlogsData[];
};

const BlogPageCard = ({ blogs }: Props) => {
    return (
        <Container sx={{ my: 10, display: "flex", justifyContent: "center" }}>
            <Box sx={{ bgcolor: "#191C23", p: 4, width: { xs: "440px", md: "100%" } }}>
                <Grid container spacing={2} sx={{ alignItems: "center" }}>
                    <Grid item xs={12} md={4}>
                        <Image
                            src={blogs[0].img}
                            width="366px"
                            height="255px"
                            alt=""
                            objectFit="cover"
                        />
                    </Grid>
                    <Grid item xs={12} md={8} sx={{}}>
                        <Box
                            sx={{
                                display: { xs: "block", md: "flex" },
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Typography sx={{ mr: 1 }} variant="h5">
                                {blogs[0].title}
                            </Typography>
                            <Typography
                                sx={{
                                    width: "fit-content",
                                    textAlign: "center",
                                    mx: "auto",
                                    px: "10px",
                                    py: "5px",
                                    bgcolor: "rgba(251, 222, 68, 0.3)",
                                    borderRadius: "5px",
                                    color: "rgb(251, 222, 68)",
                                }}
                            >
                                {blogs[0].publishDate}
                            </Typography>
                        </Box>
                        <Box sx={{ my: 2, display: "flex", alignItems: "center" }}>
                            <Typography sx={{ color: "#8B8787" }}>{blogs[0].publishDate}</Typography>
                            <Box sx={{ display: "flex", alignItems: "center", ml: 5 }}>
                                <Image
                                    src="/assets/images/instructor-img.png"
                                    width="30px"
                                    height="30px"
                                    alt=""
                                    objectFit="cover"
                                />
                                <Typography sx={{ mx: 1 }}>
                                    <Typography sx={{ color: "#8B8787" }} component="span">
                                        By
                                    </Typography>
                                    Alan Bell
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography sx={{ my: 2, color: "#8B8787" }}>
                                {blogs[0].startingSection.slice(0, 300)} ...
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Button>Read More</Button>
                            <Button>
                                <Image src="/assets/images/saved.png" width="21px" height="26px" alt="" />
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default BlogPageCard;
