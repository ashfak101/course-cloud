import { Avatar, Container, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { BlogsData } from "../../../types-blog";
import BlogCard from "components/shared/blogcard/BlogCard";
import BlogInstructor from "components/blogs/BlogInstructor";
import { CourseData } from "../../../types";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

type Props = {
    blog: BlogsData;
    allBlogsData: BlogsData[];
    courses: CourseData;
};

const BlogDetails = (props: Props) => {
    const { blog, allBlogsData } = props;
    return (
        <>
            <Container maxWidth="xl" sx={{ mt: 5, mb: 10 }}>
                <Typography
                    sx={{
                        textAlign: "center",   color: "#FFCF5E", backgroundColor: "#4B472A", borderRadius: "5px",
                        width: "90px",
                        height: "22px",
                        marginLeft: "25px",
                        marginTop: "61px",
                        marginBottom: "10px",
                    }} >
                    Technology
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "46px",
                        lineHeight: "140%",
                        marginLeft: "25px",
                        marginBottom: "35px",
                    }}
                >
                    {blog.title}
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} sx={{ padding: "0px 0px" }}>
                        <Grid item xs={12} xl={8} md={8}>
                            <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
                                <Image src={blog.img} width="930px" height="518px" alt="img" />
                                <Avatar
                                    sx={{ marginLeft: "25px", marginTop: "44px" }}
                                    aria-label="recipe"
                                >
                                    <Image
                                        src="/assets/images/avatarone.png"
                                        width="44px"
                                        height="44px"
                                        alt=""
                                    />
                                </Avatar>

                                <Typography
                                    sx={{
                                        fontFamily: "Lato",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "180%",
                                        textAlign: "left",
                                        marginLeft: "25px",
                                        color: "#8B8787",
                                        marginTop: "31px",
                                    }}
                                >
                                    {blog.startingSection}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Lato",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "22px",
                                        lineHeight: "140%",
                                        textAlign: "left",
                                        marginLeft: "25px",
                                        marginTop: "40px",
                                        color: "#FBF4F4",
                                    }}
                                >
                                    {blog.secondSection.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Lato",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "180%",
                                        textAlign: "left",
                                        marginLeft: "25px",
                                        color: "#8B8787",
                                        marginTop: "31px",
                                    }}
                                >
                                    {blog.secondSection.summary}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Lato",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "22px",
                                        lineHeight: "140%",
                                        textAlign: "left",
                                        marginLeft: "25px",
                                        marginTop: "40px",
                                        color: "#FBF4F4",
                                    }}
                                >
                                    {blog.secondSection.point1}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Lato",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "180%",
                                        textAlign: "left",
                                        marginLeft: "25px",
                                        color: "#8B8787",
                                        marginTop: "31px",
                                    }}
                                >
                                    {blog.secondSection.point1Content}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Lato",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "22px",
                                        lineHeight: "140%",
                                        textAlign: "left",
                                        marginLeft: "25px",
                                        marginTop: "40px",
                                        color: "#FBF4F4",
                                    }}
                                >
                                    {blog.secondSection.point2}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Lato",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "180%",
                                        textAlign: "left",
                                        marginLeft: "25px",
                                        color: "#8B8787",
                                        marginTop: "31px",
                                    }}
                                >
                                    {blog.secondSection.point2Content}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Lato",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "22px",
                                        lineHeight: "140%",
                                        textAlign: "left",
                                        marginLeft: "25px",
                                        marginTop: "40px",
                                        color: "#FBF4F4",
                                    }}
                                >
                                    {blog.secondSection.point3}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Lato",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "180%",
                                        textAlign: "left",
                                        marginLeft: "25px",
                                        color: "#8B8787",
                                        marginTop: "31px",
                                    }}
                                >
                                    {blog.secondSection.point3Content}
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} xl={4} md={4}>
                            <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
                                <Typography
                                    sx={{
                                        textAlign: "left",
                                        backgroundColor: "#21252D",
                                        padding: "19px 24px",
                                        borderRadius: "4px 4px 0px 0px",
                                        color: "white",
                                        fontFamily: "Lato",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "20px",
                                        lineHeight: "140%",
                                    }}
                                >
                                    Popular Blogs
                                </Typography>
                            </Item>
                            <Grid item xs={12}>
                                {allBlogsData.slice(0, 10).map((allblog) => (
                                    <Item
                                        key={allblog.id}
                                        sx={{ backgroundColor: "transparent", boxShadow: "0" }}
                                    >
                                        <Box sx={{ flexGrow: 1, borderBottom: "1px solid #E2B62738" }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={6} xl={4} md={5}>
                                                    <Item
                                                        sx={{
                                                            backgroundColor: "transparent",
                                                            boxShadow: "0",
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        <Image src={allblog.img} width="91px" height="91px" alt="img" />
                                                    </Item>
                                                </Grid>
                                                <Grid item xs={6} xl={8} md={7}>
                                                    <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: "Lato",
                                                                fontStyle: "normal",
                                                                fontWeight: "700",
                                                                fontSize: "18px",
                                                                lineHeight: "140%",
                                                                textAlign: "left",
                                                                color: "white",
                                                            }}
                                                        >
                                                            <Link href={`/blogs/${allblog.id}`} passHref>
                                                                <a>{allblog.title}</a>
                                                            </Link>
                                                        </Typography>
                                                    </Item>
                                                    <Box sx={{ flexGrow: 1 }}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={6}>
                                                                <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
                                                                    <Typography
                                                                        sx={{
                                                                            fontFamily: "Lato",
                                                                            fontStyle: "normal",
                                                                            fontWeight: "400",
                                                                            fontSize: "14px",
                                                                            lineHeight: "150%",
                                                                            textAlign: "left",
                                                                            color: "#8B8787",
                                                                        }}
                                                                    >
                                                                        August 10
                                                                    </Typography>
                                                                </Item>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
                                                                    <Typography
                                                                        sx={{
                                                                            fontFamily: "Lato",
                                                                            fontStyle: "normal",
                                                                            fontWeight: "400",
                                                                            fontSize: "14px",
                                                                            lineHeight: "150%",
                                                                            textAlign: "left",
                                                                            color: "#8B8787",
                                                                        }}
                                                                    >
                                                                        By Alan Bell
                                                                    </Typography>
                                                                </Item>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Item>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Box sx={{ backgroundColor: "#191C23" }}>
                <Container maxWidth="xl">
                    <Typography
                        sx={{
                            fontFamily: "Lato",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "36px",
                            lineHeight: "43px",
                            textAlign: { xl: "left", xs: "center" },
                            color: "white",
                            marginBottom: "35px",
                            marginTop: "110px",
                            marginLeft: { xl: "70px" },
                            paddingTop: "34px",
                        }}
                    >
                        More Blogs From Alan
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {allBlogsData.slice(0, 3).map((allblog) => (
                                <Grid
                                    item
                                    xs={12}
                                    xl={4}
                                    md={4}
                                    sx={{ display: "flex", justifyContent: "center" }}
                                    key={allblog.id}
                                >
                                    <Item
                                        sx={{
                                            backgroundColor: "transparent",
                                            boxShadow: "0",
                                            textAlign: "left",
                                            marginBottom: "64px",
                                        }}
                                    >
                                        <BlogCard blog={allblog} />
                                    </Item>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ mt: 25 }}>
                <BlogInstructor courses={props.courses} />
            </Box>
        </>
    );
};
export default BlogDetails;
