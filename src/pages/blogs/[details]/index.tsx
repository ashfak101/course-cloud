import { Avatar, Container, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import BlogDetails from "components/blogdetails/BlogDetails";
import { GetCoursesData } from "../../../../types";

const Item = styled(Paper)(({ theme }) => ({
 backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
 ...theme.typography.body2,
 padding: theme.spacing(1),
 textAlign: "center",
 color: theme.palette.text.secondary,
}));

const BlogDetail = ({ blog, allBlogsData, courses }: any) => {
 return (
  <>
   <BlogDetails blog={blog} allBlogsData={allBlogsData} courses={courses} />
  </>
 );
};
export default BlogDetail;

export async function getStaticPaths() {
 const res = await fetch(
  "https://tawsifhye.github.io/data/coursecloudblogs.json"
 );
 const blogs = await res.json();
 const paths = blogs.map((blog: any) => ({
  params: { details: blog.id.toString() },
 }));
 return { paths, fallback: false };
}

export async function getStaticProps(context: any) {
 const res = await fetch(
  "https://tawsifhye.github.io/data/coursecloudblogs.json"
 );
 const blogs = await res.json();
 const blog = blogs.find(
  (blog: any) => blog.id.toString() === context.params.details
 );

 const allBlogsRes = await fetch(
  "https://tawsifhye.github.io/data/coursecloudblogs.json"
 );
 const allBlogsData = await allBlogsRes.json();

 const courseResponse = await fetch(
  "https://api.npoint.io/8b635b31d3c9d683fcec"
 );
 const courses: GetCoursesData = await courseResponse.json();

 return { props: { blog, allBlogsData, courses } };
}
