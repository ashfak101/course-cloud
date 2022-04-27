import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import { BlogsData } from "../../../types-blog";
import Link from "next/link";

type Props = {
    blogs: BlogsData[];
};

const BlogPageCard = ({ blogs }: Props) => {
    console.log(blogs);
    const Styles = {
        container: {
            my: 8,
        },
        cardBox: {
            bgcolor: "#191C23",
            p: "10px 40px 20px 40px",
            width: { xs: "440px", md: "100%" },
            my: 5,
            mx: "auto",
        },
        cardTitle: {
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
        },
        cardTitleCategory: {
            width: "fit-content",
            textAlign: "center",
            mt: 2,
            mx: "auto",
            px: "10px",
            py: "5px",
            bgcolor: "rgba(251, 222, 68, 0.3)",
            borderRadius: "5px",
            color: "rgb(251, 222, 68)",
        },
        instructorContainer: {
            display: "flex",
            alignItems: "center",
            ml: 5,
        },
        cardButton: {
            border: "2px solid #D19F28",
            color: "#D19F28",
            px: 3,
            ":hover": { color: "#191C22", bgcolor: "#D19F28" },
        },
        secondTitle: {
            my: 2,
            display: "flex",
            alignItems: "center",
        },
    };

    return (
        <Container sx={Styles.container}>
            {blogs.map((blog) => (
                <Box key={blog.id} sx={Styles.cardBox}>
                    <Grid container spacing={3} sx={{ alignItems: "center", my: 2 }}>
                        <Grid item xs={12} md={4}>
                            <Image
                                src={blog.img}
                                width="366px"
                                height="255px"
                                alt=""
                                objectFit="cover"
                            />
                        </Grid>
                        <Grid item xs={12} md={8} sx={{}}>
                            <Box sx={Styles.cardTitle}>
                                <Typography sx={{ mr: 1 }} variant="h5">
                                    {blog.title}
                                </Typography>
                                <Typography sx={Styles.cardTitleCategory}>
                                    {blog.publishDate}
                                </Typography>
                            </Box>
                            <Box sx={Styles.secondTitle}>
                                <Typography sx={{ color: "#8B8787" }}>{blog.publishDate}</Typography>
                                <Box sx={Styles.instructorContainer}>
                                    <Image
                                        src="/assets/images/instructor-img.png"
                                        width="30px"
                                        height="30px"
                                        alt=""
                                        objectFit="cover"
                                    />
                                    <Typography sx={{ mx: 1 }}>
                                        <Typography sx={{ color: "#8B8787" }} component="span">
                                            By{" "}
                                        </Typography>
                                        Alan Bell
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography sx={{ my: 2, color: "#8B8787" }}>
                                    {blog.startingSection.slice(0, 300)} ...
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Button sx={Styles.cardButton}><Link href={`/blogs/${blog.id}`} passHref>
                                    <a>READ MORE</a>
                                </Link></Button>
                                <Button>
                                    <Image src="/assets/images/saved.png" width="21px" height="26px" alt="" />
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </Container>
    );
};

export default BlogPageCard;
