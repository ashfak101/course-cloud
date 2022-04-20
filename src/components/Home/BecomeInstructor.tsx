import { Box, Button, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from "next/image";

const Styles = {
    becomeBackground: {
        backgroundImage: `url('/assets/images/becomebackground.png')`,
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

const BecomeInstructor = () => {
    return(
        <>
        <Box sx={{ ...Styles.becomeBackground}}>
        <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2} sx={{display: "flex", alignItems: "center" }}>
        <Grid item xs={2}>
          <Item>
              <Image src='/assets/images/personone.png' width='258' height='330'/>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
          <Image src='/assets/images/persontwo.png' width='258' height='330'/>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
          <Image src='/assets/images/personthree.png' width='258' height='330'/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Item>
              <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '700', fontSize:'36px', lineHeight:'43px', textAlign:'left'}}>
              Become an Instructor - Earn by Teaching Online at Course Cloud
              </Typography>
          </Item>
          <Item>
                <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '400', fontSize:'18px', lineHeight:'21px', textAlign:'left'}}>
                Watch thousands of lessons from the best as they share their <br/> stories, skills, shortcuts, failures, and successes.
                </Typography>
          </Item>
          <Item sx={{textAlign:'left'}}>
              <Button>BECOME A INSTRUCTOR</Button>
          </Item>
          </Item>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item>
          <Image src='/assets/images/personfour.png' width='258' height='330'/>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
          <Image src='/assets/images/personfive.png' width='258' height='330'/>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
          <Image src='/assets/images/personsix.png' width='258' height='330'/>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
          <Image src='/assets/images/personseven.png' width='258' height='330'/>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
          <Image src='/assets/images/personeight.png' width='258' height='330'/>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
          <Image src='/assets/images/personnine.png' width='258' height='330'/>
          </Item>
        </Grid>
      </Grid>
    </Box>
        </Box>
        </>
    )
}
export default BecomeInstructor;