import { Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from "next/image";
import CommonButton from "components/shared/buttons/CommonButton";
import { useState } from "react";
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
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Blogs = () => {
    const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
        <Box sx={{width:'697px', height:'100%', backgroundColor:'#21252D', display:'flex', alignItems: 'center', justifyContent: "center", borderRadius:'20px', padding:'0px 0px'}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="inherit"
     variant="scrollable"
     sx={{
      "& .MuiTabs-indicator": {
       backgroundColor: "#DC9202",
       borderBottom: "3px solid #DC9202",
      },
     }}>
    <Tab label="All" {...a11yProps(0)} />
    <Tab label="Technology" {...a11yProps(1)} />
    <Tab label="Marketing" {...a11yProps(2)} />
    <Tab label="Design" {...a11yProps(2)} />
    <Tab label="Development" {...a11yProps(2)} />
  </Tabs>
</Box>

        </Box>
        </Box>
        <Box sx={{display:'flex', justifyContent:'center', textAlign:'center'}}>
        <Box sx={{width:'1170px', height:'100%', backgroundColor:'#21252D', display:'flex', alignItems: 'center', justifyContent: "center", borderRadius:'10px', marginTop:'52px', padding:'20px 20px'}}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={4} md={4}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12} md={12}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
              <Image src="/assets/images/blogone.png" width={366} height={278}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
          </Item>
        </Grid>
        <Grid item xs={12} xl={8} md={8}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={10} xl={10} md={10}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
          <Typography sx={{textAlign: 'left', color:'white'}}>
          How to Pitch a Video Game: 7 Tips for Pitching <br/> Games
          </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} xl={2} md={2}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
          <Typography sx={{textAlign: 'center', color:'#FFCF5E', backgroundColor:'#4B472A', borderRadius:'5px'}}>
          Technology
          </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} xl={3} md={3}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
              <Typography sx={{ color:'white', textAlign: 'left'}}>
                  Augest 10th, 2020
              </Typography>
          </Item>
        </Grid>
        <Grid item xs={2} xl={1}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0', textAlign: 'left'}}>
              <Image src="/assets/images/blogauthor.png" width={27} height={27}/>
          </Item>
        </Grid>
        <Grid item xs={4} xl={2}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
              <Typography sx={{ color:'white', textAlign:'left'}}>
              By Alan Bell
              </Typography>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0'}}>
              <Typography sx={{textAlign: 'left', color:'white'}}>
              Certificate in British Sign Language Course Overview If you want to broad up your experiences and development in communication throug, If you want to broad up your experiences and development in communication through…
              </Typography>
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item sx={{textAlign: 'left', backgroundColor:'transparent', boxShadow:'0'}}>
              <Button sx={{border:'1px solid #CE9D28', width:'154px', height:'40px', color:'#CE9D28'}}>
                  READ MORE
              </Button>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{backgroundColor:'transparent', boxShadow:'0', marginTop:'3px'}}>
              <Image src="/assets/images/saved.png" width={21} height={26}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
        </Box>
        </Box>
        </>
    )
}
export default Blogs;