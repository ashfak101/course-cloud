import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CommonButton from 'components/shared/buttons/CommonButton';
import React from 'react';

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


const BlogsHero = () => {
    return (
        <Box sx={{ ...Styles.blogBackground}}>
        <Container maxWidth="xl">
            <Box sx={{textAlign: 'center'}}>
                <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '700', fontSize:'36px', lineHeight:'43px', textAlign:'center', color:'white', marginBottom:'26px'}}>
                Find Awsome Writings by Our Authors 
                </Typography>
                <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '400', fontSize:'18px', lineHeight:'140%', textAlign:'center', color: "white", marginBottom:'45px'}}>
                Pursue your passion with online classes taught by award - winning chefs, <br/> writers, and performers.
                </Typography>
                <CommonButton fontSize="1rem" textValue="VIEW MORE" onClick=""/>
            </Box>
        </Container>
    </Box>
    );
};

export default BlogsHero;