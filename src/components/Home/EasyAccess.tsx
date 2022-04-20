import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from "next/image";
const Styles = {
    easyAccessBackground: {
        backgroundImage: `url('/assets/images/easyaccess.png')`,
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
const EasyAccess = () => {
    return(
        <>
        <Box sx={{ ...Styles.easyAccessBackground}}>
            <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{display: "flex", alignItems: "center" }}>
        <Grid item xs={12} xl={6} md={6}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
              <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '700', fontSize:'36px', lineHeight:'43px', textAlign:'left', color:'white', marginBottom:'26px'}}>
              Easy Access From Anywhere
              </Typography>
          </Item>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
                <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '400', fontSize:'18px', lineHeight:'140%', textAlign:'left', color: "white", marginBottom:'45px'}}>
                Tincidunt eget lectus facilisis ut tincidunt. Tellus at diam facilisis enim consectetur adipiscing cras tincidunt. Et placerat tempor dignissim tempor eget sit cursus. Diam nunc vulputate vel ornare. Ultrices sapien ullamcorper tristique eleifend amet leo odio.
                </Typography>
          </Item>
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={4} md={4} sx={{ marginTop:'5px' }}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0', textAlign:'left'}}>
              <Image src='/assets/images/googleplay.png' width='217' height='70'/>
          </Item>
        </Grid>
        <Grid item xs={12} xl={4} md={4}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0', textAlign:'left'}}>
          <Image src='/assets/images/appstore.png' width='217' height='70'/>
          </Item>
        </Grid>
      </Grid>
    </Box>
        </Grid>
        <Grid item xs={12} xl={6} md={6}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
              <Image src='/assets/images/phone.png' width='469' height='519'/>
          </Item>
        </Grid>
      </Grid>
    </Box>
            </Container>
        </Box>
        </>
    )
}
export default EasyAccess;