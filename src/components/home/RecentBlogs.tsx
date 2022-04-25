import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BlogCard from "components/shared/blogcard/BlogCard";

const RecentBlogs = () => {
    return (
        <>
        <Container maxWidth="xl">
        <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '700', fontSize:'36px', lineHeight:'43px', textAlign:'left', color:'white', marginBottom:'35px', marginTop:'110px'}}>Our Recent Blogs</Typography>
        <BlogCard/>
        <Box sx={{textAlign:'center'}}>
        <Button sx={{width:'230px', height:'60px', borderRadius:'5px', border:'1px solid white', color:'white', marginTop:'50px', fontFamily:'Lato', fontStyle:'normal', fontWeight:'500', fontSize:'18px', lineHeight:'71.5%', marginBottom:'110px',":hover": {
     bgcolor: "#5193F6", border: "0px"
    },}}>READ MORE</Button>
        </Box>
        </Container>
        </>
    )
}
export default RecentBlogs;