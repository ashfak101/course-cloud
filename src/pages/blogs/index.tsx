import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from "next/image";
import CommonButton from "components/shared/buttons/CommonButton";
const Styles = {
    blogBackground: {
        backgroundImage: `url('/assets/images/blogbackground.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
    }
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Blogs = () => {
    return(
        <>
        <Box sx={{ ...Styles.blogBackground}}>
            <Container maxWidth="xl">
                <Box sx={{textAlign: 'center'}}>
                    <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '700', fontSize:'36px', lineHeight:'43px', textAlign:'center', color:'white', marginBottom:'26px'}}>
                    Find Awsome Writings by Our Authors 
                    </Typography>
                    <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '400', fontSize:'18px', lineHeight:'140%', textAlign:'center', color: "white", marginBottom:'45px'}}>
                    Pursue your passion with online classes taught by award - winning chefs, <br/> writers, and performers.
                    </Typography>
                    <CommonButton fontSize="1rem" textValue="VIEW MORE"/>
                </Box>
            </Container>
        </Box>
        <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '700', fontSize:'36px', lineHeight:'43px', textAlign:'center', color:'white', marginBottom:'26px'}}>
            Blogs
        </Typography>
        <Box sx={{display:'flex', justifyContent:'center', textAlign:'center'}}>
        <Box sx={{width:'797px', height:'60px', backgroundColor:'#21252D', display:'flex', alignItems: 'center', justifyContent: "center", borderRadius:'9px',}}>
            <Box>
                
            </Box>
            <Box>

            </Box>
            <Box>

            </Box>
            <Box>

            </Box>
        </Box>
        </Box>
        </>
    )
}
export default Blogs;