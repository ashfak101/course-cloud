import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from "next/image";
const Styles = {
    footerBackground: {
        backgroundImage: `url('/assets/images/footerbackground.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '600px',
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
const Footer = () => {
    return(
        <>
        <Box sx={{ ...Styles.footerBackground}}>
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1, paddingTop:'60px' }}>
      <Grid container spacing={2}>
        <Grid item xs={8} xl={3} md={3}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0', textAlign:'left'}}>
              <Image src='/assets/images/site-logo.png' width='291' height='54' alt="img"/>
          </Item>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
                <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '400', fontSize:'18px', lineHeight:'140%', textAlign:'left', color: "white"}}>
                Quis consectetur orci proin massa, et. Fermentum fringilla pharetra arcu mauris dis tristique sit id mattis. Pretium quisque phasellus dictum duis dapibus hendrerit curabitur.
                </Typography>
          </Item>
          <Item sx={{display:'flex', alignItems:'center',backgroundColor:'transparent', boxShadow:'0'}}>
              <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
              <Image src='/assets/images/locationicon.png' width='16' height='21px' alt="img"/>
              </Item>
              <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
                <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '400', fontSize:'16px', lineHeight:'140%', textAlign:'left', color: "white"}}>
                89  Crown Street, LONDON, SW3 1AQ
                </Typography>
              </Item>
          </Item>
        </Grid>
        <Grid item xs={4} xl={3} md={3}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}><Typography sx={{fontFamily:'Lato', fontStyle:'normal', color:'white'}}>About</Typography></Item>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}><Typography sx={{fontFamily:'Lato', fontStyle:'normal', color:'white'}}>Affiliate program</Typography></Item>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}><Typography sx={{fontFamily:'Lato', fontStyle:'normal', color:'white'}}>Careers</Typography></Item>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}><Typography sx={{fontFamily:'Lato', fontStyle:'normal', color:'white'}}>Privacy</Typography></Item>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}><Typography sx={{fontFamily:'Lato', fontStyle:'normal', color:'white'}}>Terms</Typography></Item>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}><Typography sx={{fontFamily:'Lato', fontStyle:'normal', color:'white'}}>Grants</Typography></Item>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}><Typography sx={{fontFamily:'Lato', fontStyle:'normal', color:'white'}}>Groups</Typography></Item>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}><Typography sx={{fontFamily:'Lato', fontStyle:'normal', color:'white'}}>Support</Typography></Item>
        </Grid>
        <Grid item xs={4} xl={3} md={3}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}><Typography sx={{fontFamily:'Lato', fontStyle:'normal', color:'white'}}>Social</Typography></Item>
          <Item sx={{display: "flex", alignItems: "center", justifyContent: "center",backgroundColor:'transparent', boxShadow:'0'}}>
              <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
                <Image src='/assets/images/twitter.png' width='18' height='18px' alt="img"/>
              </Item>
              <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
                <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '400', fontSize:'16px', lineHeight:'140%', textAlign:'left', color: "white"}}>
                    Twitter
                </Typography>
              </Item>
          </Item>
          <Item sx={{display: "flex", alignItems: "center", justifyContent: "center",backgroundColor:'transparent', boxShadow:'0' }}>
              <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
                <Image src='/assets/images/instagram.png' width='18' height='18px' alt="img"/>
              </Item>
              <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
                <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '400', fontSize:'16px', lineHeight:'140%', textAlign:'left', color: "white"}}>
                    Instagram
                </Typography>
              </Item>
          </Item>
          <Item sx={{display: "flex", alignItems: "center", justifyContent: "center",backgroundColor:'transparent', boxShadow:'0' }}>
              <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
                <Image src='/assets/images/facebook.png' width='18' height='18px' alt="img"/>
              </Item>
              <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
                <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '400', fontSize:'16px', lineHeight:'140%', textAlign:'left', color: "white"}}>
                    Facebook
                </Typography>
              </Item>
          </Item>
          <Item sx={{display: "flex", alignItems: "center", justifyContent: "center",backgroundColor:'transparent', boxShadow:'0' }}>
              <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
                <Image src='/assets/images/youtube.png' width='18' height='18px' alt="img"/>
              </Item>
              <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
                <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '400', fontSize:'16px', lineHeight:'140%', textAlign:'left', color: "white"}}>
                    Youtube
                </Typography>
              </Item>
          </Item>
          <Item sx={{display: "flex", alignItems: "center", justifyContent: "center",backgroundColor:'transparent', boxShadow:'0' }}>
              <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
                <Image src='/assets/images/linkedin.png' width='18' height='18px' alt="img"/>
              </Item>
              <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
                <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '400', fontSize:'16px', lineHeight:'140%', textAlign:'left', color: "white"}}>
                    LinkedIn
                </Typography>
              </Item>
          </Item>
        </Grid>
        <Grid item xs={8} xl={3} md={3}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
              <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '400', fontSize:'16px', lineHeight:'140%',  color: "white"}}>
              Download
              </Typography>
          </Item>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
          <Image src='/assets/images/googleplay.png' width='217' height='70' alt="img"/>
          </Item>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
          <Image src='/assets/images/appstore.png' width='217' height='70' alt="img"/>
          </Item>
        </Grid>
      </Grid>
    </Box>
            </Container>
        </Box>
        </>
    )
}
export default Footer;