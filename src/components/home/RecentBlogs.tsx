import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BlogCard from "components/shared/blogcard/BlogCard";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { BlogsData } from "../../../types-blog";


type Props = {
  blogs: BlogsData[];
};


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const RecentBlogs = ({ blogs }: Props) => {
  // console.log('blogs alskdjflkasjflkasjflk', blogs);
  return (
    <>
      <Container maxWidth="xl">
        <Typography sx={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '700', fontSize: '36px', lineHeight: '43px', textAlign: { xl: 'left', xs: 'center' }, color: 'white', marginBottom: '35px', marginTop: '110px', marginLeft: { xl: '70px' } }}>Our Recent Blogs</Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {blogs.slice(0, 3).map((blog) => (
              <Grid item xs={12} xl={4} md={4} sx={{ display: 'flex', justifyContent: 'center' }} key={blog.id}>
                <Item sx={{ backgroundColor: "transparent", boxShadow: "0", textAlign: 'left' }}><BlogCard blog={blog} /></Item>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Button sx={{
            width: '230px', height: '60px', borderRadius: '5px', border: '1px solid white', color: 'white', marginTop: '50px', fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '500', fontSize: '18px', lineHeight: '71.5%', marginBottom: '110px', ":hover": {
              bgcolor: "#5193F6", border: "0px"
            },
          }}>READ MORE</Button>
        </Box>
      </Container>
    </>
  )
}
export default RecentBlogs;