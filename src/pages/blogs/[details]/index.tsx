import { Avatar, Container, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/system";
import BlogDetails from "components/blogdetails/BlogDetails";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const BlogDetail = ({ blog, allBlogsData }: any) => {
  return (
    <>
      <BlogDetails blog={blog} allBlogsData={allBlogsData} />
    </>
  )
}
export default BlogDetail;


export async function getStaticPaths() {
  const res = await fetch("https://api.npoint.io/25e8205992894fabbd1d");
  const blogs = await res.json();
  const paths = blogs.map((blog: any) => ({
    params: { details: blog.id.toString() },
  }));
  return { paths, fallback: false };
}


export async function getStaticProps(context: any) {
  const res = await fetch("https://api.npoint.io/25e8205992894fabbd1d");
  const blogs = await res.json();
  const blog = blogs.find((blog: any) => blog.id.toString() === context.params.details);

  const allBlogsRes = await fetch("https://api.npoint.io/25e8205992894fabbd1d");
  const allBlogsData = await allBlogsRes.json();

  return { props: { blog, allBlogsData } };
}