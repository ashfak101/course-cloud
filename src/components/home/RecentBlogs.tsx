import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BlogCard from "components/shared/blogcard/BlogCard";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { BlogsData } from "../../../types-blog";
import Link from "next/link";


type Props = {
  blogs: BlogsData[];
};



const RecentBlogs = ({ blogs }: Props) => {
  return (
    <>
      <Container maxWidth="xl">
        <Typography sx={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '700', fontSize: '36px', lineHeight: '43px', textAlign: { xl: 'left', xs: 'center' }, color: 'white', marginBottom: '35px', marginTop: '110px', marginLeft: { xl: '70px' } }}>Our Recent Blogs</Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {blogs.slice(0, 3).map((blog) => (
              <Grid item xs={12} xl={4} md={4} sx={{ display: 'flex', justifyContent: 'center' }} key={blog.id}>
                <BlogCard blog={blog} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Button sx={{
            width: '230px', height: '60px', borderRadius: '5px', border: '1px solid white', color: 'white', marginTop: '50px', fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '500', fontSize: '18px', lineHeight: '71.5%', marginBottom: '110px', ":hover": {
              bgcolor: "#5193F6", border: "0px"
            },
          }}><Link href="/blogs" passHref>
              <a>READ MORE</a>
            </Link></Button>
        </Box>
      </Container>
    </>
  )
}
export default RecentBlogs;