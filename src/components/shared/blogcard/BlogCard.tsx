import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const BlogCard = () => {
    return(
        <>
        <Card sx={{ maxWidth: 345, backgroundColor:'#21252C', position:'relative' }}>
      <CardMedia
        component="img"
        width="348"
        height="260"
        image="/assets/images/recentblogone.png"
        alt="green iguana"
      />
      <Avatar sx={{  position:'absolute', top: 240, left:22}} aria-label="recipe">
            <Image src="/assets/images/avatarone.png" width="44px" height="44px" alt=""/>
          </Avatar>
      <CardContent>
        <Typography gutterBottom component="div" sx={{color: 'white', fontFamily:'Lato', fontStyle: 'normal', fontWeight: '700', fontSize:'16px', lineHeight:'140%', marginTop:'18px'}}>
        How to Pitch a Video Game: 7 Tips for <br/>
Pitching Games
        </Typography>
        <Typography sx={{color:'#8B8787',fontFamily:'Lato', fontStyle:'normal', fontWeight:'300', fontSize:'14px', lineHeight:'150%', marginTop:'7px', marginBottom:'15px'}}>August 10th, 2020</Typography>
        <Typography variant="body2" color="text.secondary" sx={{color: '#FBF4F4', fontFamily:'Lato', fontStyle: 'normal', fontWeight: '300', fontSize:'14px', lineHeight:'150%'}}>
        Vitae bibendum egestas magna sit elit non. Netus volutpat dignissim pharetra felis dictumst.
        </Typography>
      </CardContent>
      <CardActions>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{display: 'flex', alignItems:'center',}}>
        <Grid item xs={8} xl={8} md={8}>
          <Item sx={{textAlign:'left', backgroundColor:'transparent', boxShadow:'0' }}>
          <Button sx={{border:'1px solid #D19F28', color:'white', fontFamily:'Lato', fontStyle: 'normal', fontWeight: '500', fontSize:'14px', lineHeight:'140%', paddingLeft:'27px', paddingRight:'27px', paddingTop:'10px', paddingBottom:'10px', ":hover":{backgroundColor:'#DC9202', color:'black'}}}>READ MORE</Button>
          </Item>
        </Grid>
        <Grid item xs={4} xl={4} md={4}>
          <Item sx={{textAlign:'right', backgroundColor:'transparent', boxShadow:'0', marginRight:'10px'}}>
          <Image src="/assets/images/saved.png" width="21px" height="26px" alt=""/>
          </Item>
        </Grid>
      </Grid>
    </Box>
      </CardActions>
    </Card> 
        </>
    )
}
export default BlogCard;